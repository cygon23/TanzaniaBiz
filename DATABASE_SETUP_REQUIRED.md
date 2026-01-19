# 🚨 URGENT: Database Setup Required

## Current Issue

Your signup is failing with this error:
```
ERROR: type "user_role" does not exist (SQLSTATE 42704)
```

**Root Cause**: The database schema has NOT been applied to your Supabase instance yet.

---

## ✅ Quick Fix (5 minutes)

### Step 1: Access Supabase SQL Editor

1. Open your browser and go to: https://supabase.com/dashboard
2. Select your project: `vgmrlnonriipoyifzuph`
3. Click **"SQL Editor"** in the left sidebar
4. Click **"+ New query"** button

### Step 2: Apply Database Schema

1. Open the file: `/home/user/TanzaniaBiz/supabase-schema.sql` (on your local machine)
2. **Copy ALL contents** of the file (Ctrl+A, Ctrl+C)
3. **Paste** into the Supabase SQL Editor
4. Click **"Run"** (or press Ctrl+Enter)

⏱️ This will take about 5-10 seconds to execute.

### Step 3: Verify Setup

After running the script, you should see a success message. Verify by:

1. Click **"Table Editor"** in the left sidebar
2. You should now see these tables:
   - ✅ profiles
   - ✅ businesses
   - ✅ business_plans
   - ✅ compliance_records
   - ✅ mentor_profiles
   - ✅ mentorships
   - ✅ mentor_sessions
   - ✅ company_profiles
   - ✅ programs
   - ✅ activities

### Step 4: Test Signup

1. Go back to your app: http://localhost:8080/
2. Try to sign up again
3. ✅ Signup should now work!

---

## 📋 What This Schema Creates

### Custom Types (Enums)
- `user_role`: entrepreneur, mentor, company, admin
- `business_stage`: idea, startup, growing, established
- `compliance_status`: pending, in_progress, completed, expired
- `session_status`: scheduled, completed, cancelled, in_progress

### Tables with Row Level Security
- All 9 core tables with proper indexes and policies
- Secure access control based on user roles
- Automatic timestamp management

### Triggers
- **`on_auth_user_created`**: Automatically creates a profile when a user signs up
- This is what's currently failing because `user_role` type doesn't exist

---

## 🔍 Why This Happened

The application code is configured correctly, but the **database schema setup step was skipped**. The Supabase database is empty, so when you try to sign up:

1. User fills registration form ✅
2. Supabase Auth creates auth.users record ✅
3. Trigger fires to create profile ❌ **FAILS HERE**
4. Error: `user_role` type doesn't exist ❌

Once you apply the schema, the full flow will work:

1. User fills registration form ✅
2. Supabase Auth creates auth.users record ✅
3. Trigger fires to create profile ✅
4. Profile created in public.profiles table ✅
5. User logs in successfully ✅

---

## 🎯 Next Steps After Setup

Once the schema is applied:

1. ✅ Signup will work
2. ✅ Login will work
3. ✅ Profiles will be created automatically
4. ✅ Role-based access control will work
5. ✅ All dashboards will have database access

---

## 🆘 Need Help?

If you encounter any errors when running the SQL:

1. **Copy the exact error message** from Supabase SQL Editor
2. Check if any tables already exist (Table Editor)
3. If tables exist but with errors, you may need to drop them first:
   ```sql
   -- Only run this if you need to start fresh
   DROP TABLE IF EXISTS activities CASCADE;
   DROP TABLE IF EXISTS programs CASCADE;
   DROP TABLE IF EXISTS company_profiles CASCADE;
   DROP TABLE IF EXISTS mentor_sessions CASCADE;
   DROP TABLE IF EXISTS mentorships CASCADE;
   DROP TABLE IF EXISTS mentor_profiles CASCADE;
   DROP TABLE IF EXISTS compliance_records CASCADE;
   DROP TABLE IF EXISTS business_plans CASCADE;
   DROP TABLE IF EXISTS businesses CASCADE;
   DROP TABLE IF EXISTS profiles CASCADE;
   DROP TYPE IF EXISTS session_status;
   DROP TYPE IF EXISTS compliance_status;
   DROP TYPE IF EXISTS business_stage;
   DROP TYPE IF EXISTS user_role;
   ```

Then run the full `supabase-schema.sql` again.

---

**Created**: 2026-01-19
**Priority**: CRITICAL - Must be done before any signups will work
