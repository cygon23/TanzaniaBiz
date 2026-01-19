# 🚨 URGENT: Fix Auth Signup Issue

## Current Problem
Database verification passed ✓, but signup still fails with "Database error saving new user"

## Root Cause
The trigger `on_auth_user_created` was likely created BEFORE the `user_role` enum existed (from an earlier failed attempt). The trigger is now corrupted and needs to be rebuilt.

---

## 🔧 SOLUTION - Choose ONE option:

### Option 1: Rebuild the Trigger (RECOMMENDED)

**Step 1:** Go to Supabase SQL Editor

**Step 2:** Copy and run this script: `fix-auth-trigger.sql`

This will:
1. Drop the old corrupted trigger
2. Recreate it properly
3. Add error handling
4. Verify it was created correctly

**Step 3:** Test signup again

---

### Option 2: Disable Trigger (Quick Fix)

If Option 1 doesn't work, run this in Supabase SQL Editor:

```sql
-- Disable the trigger temporarily
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- The application code will handle profile creation instead
-- (already implemented in auth.service.ts)
```

Then test signup. The application code has a failsafe that creates profiles even without the trigger.

---

## 🔍 Diagnostic Steps

**Before trying either option**, run this diagnostic to see what's wrong:

1. Go to Supabase SQL Editor
2. Copy and run: `diagnose-auth-issue.sql`
3. Share the results with me

This will show:
- ✓ If user_role enum is properly configured
- ✓ If profiles table structure is correct
- ✓ Current trigger definition
- ✓ Function definition
- ✓ RLS status

---

## 📊 Files Created

| File | Purpose |
|------|---------|
| `fix-auth-trigger.sql` | Rebuilds the auth trigger properly |
| `diagnose-auth-issue.sql` | Shows detailed diagnostic information |

---

## ⚡ Quick Fix Command

If you want to skip diagnostics and just fix it now:

### In Supabase SQL Editor:

```sql
-- Drop and recreate the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role, company_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'entrepreneur'::user_role),
    NEW.raw_user_meta_data->>'company_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

Then test signup.

---

## 🧪 After Running the Fix

1. Go to: http://localhost:8080/
2. Try creating an account
3. If it works: ✅ Done!
4. If it still fails:
   - Run Option 2 (disable trigger)
   - Share the diagnostic results

---

## 💡 Why This Happened

When you first ran the schema, the `user_role` type might not have existed yet when the trigger was created. This caused the trigger to reference a non-existent type, making it permanently broken even after the type was created.

The fix: Drop and recreate everything in the correct order.

---

**Priority**: 🔴 CRITICAL
**Time**: 2 minutes
**Next Step**: Run `fix-auth-trigger.sql` in Supabase SQL Editor
