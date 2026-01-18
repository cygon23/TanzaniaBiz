# TanzaniaBiz Setup Guide

This guide will help you set up the TanzaniaBiz application with Supabase authentication and database.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account (free tier is sufficient)

## Step 1: Install Dependencies

The Supabase client library has already been installed, but if you need to reinstall:

```bash
npm install
```

## Step 2: Set Up Supabase Project

### 2.1 Create Database Tables

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Navigate to your project (using the credentials provided)
3. Click on "SQL Editor" in the left sidebar
4. Click "New Query"
5. Copy the entire contents of `supabase-schema.sql` file
6. Paste it into the SQL Editor
7. Click "Run" to execute the SQL script

This will create all necessary tables, indexes, Row Level Security policies, and triggers.

### 2.2 Verify Table Creation

After running the SQL script, verify that all tables were created:

1. Go to "Table Editor" in the Supabase Dashboard
2. You should see the following tables:
   - profiles
   - businesses
   - business_plans
   - compliance_records
   - mentor_profiles
   - mentorships
   - mentor_sessions
   - company_profiles
   - programs
   - activities

## Step 3: Configure Authentication

### 3.1 Enable Email Authentication

1. In Supabase Dashboard, go to "Authentication" > "Providers"
2. Ensure "Email" provider is enabled
3. Configure email templates (optional but recommended):
   - Go to "Authentication" > "Email Templates"
   - Customize the "Confirm signup" and "Reset password" templates

### 3.2 Configure Email Settings

For production, you should configure SMTP settings:

1. Go to "Project Settings" > "Auth"
2. Scroll to "SMTP Settings"
3. Configure your SMTP provider (or use Supabase's default for testing)

## Step 4: Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GROQ_API_KEY=your_groq_api_key
```

You can find these values in:
- Supabase URL & Anon Key: Supabase Dashboard > Project Settings > API
- Groq API Key: https://console.groq.com/keys

**Important**: Never commit the `.env` file to version control. It's already in `.gitignore`.

## Step 5: Run the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another port if 5173 is busy).

### Production Build

```bash
npm run build
npm run preview
```

## Step 6: Create Your First User

1. Navigate to `/auth` route in your browser
2. Click on "Create Account" tab
3. Fill in the registration form:
   - First Name and Last Name
   - Email address
   - Password (minimum 6 characters)
   - Select your role (Entrepreneur, Mentor, or Company)
   - If Company: Enter company name
4. Click "Create Your Account"
5. Check your email for verification link (if email is configured)

**Note**: With Supabase's default email configuration, you might need to check your spam folder or use the Supabase Dashboard to verify users manually during development.

## Step 7: Verify User Creation

1. Go to Supabase Dashboard > "Authentication" > "Users"
2. You should see your newly created user
3. If email verification is required and not received:
   - Click on the user
   - Click "Send magic link" or manually verify the user

## Authentication Features

### Available Features

✅ User Registration with role selection
✅ Email/Password Authentication
✅ Password Reset via Email
✅ Protected Routes (Dashboard access requires authentication)
✅ Role-based Access Control
✅ Automatic Profile Creation
✅ Session Management
✅ Logout Functionality

### User Roles

- **Entrepreneur**: Access to business management, mentorship, funding, compliance
- **Mentor**: Access to mentee management, sessions, progress tracking
- **Company**: Access to programs, funding deployment, impact metrics
- **Admin**: Access to user management, analytics, system settings

## Database Schema Overview

### Core Tables

- **profiles**: User profiles linked to Supabase Auth
- **businesses**: Entrepreneur business information
- **business_plans**: Business plans with versions
- **compliance_records**: BRELA, TRA, licenses, etc.
- **mentor_profiles**: Mentor-specific information
- **mentorships**: Mentor-mentee relationships
- **mentor_sessions**: Scheduled and completed sessions
- **company_profiles**: Company/organization information
- **programs**: Corporate programs for entrepreneurs
- **activities**: Activity feed for all users

### Security (Row Level Security)

All tables have RLS policies that ensure:
- Users can only view/edit their own data
- Mentors can view their mentees' data
- Companies can view participants in their programs
- Admins have elevated access

## API Services

The application includes the following service modules:

- **auth.service.ts**: Authentication operations
- **entrepreneur.service.ts**: Business and dashboard data
- **mentor.service.ts**: Mentorship and sessions
- **company.service.ts**: Programs and impact tracking

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution**: Ensure `.env` file exists in the root directory with the correct variables.

### Issue: "Failed to create user" or "Failed to sign in"

**Solutions**:
1. Check that the database schema was created correctly
2. Verify Supabase URL and API key are correct
3. Check browser console for detailed error messages
4. Verify email provider is configured in Supabase

### Issue: "Permission denied" when accessing data

**Solutions**:
1. Ensure Row Level Security policies were created (check `supabase-schema.sql`)
2. Verify user is authenticated (check browser dev tools > Application > Local Storage)
3. Check that the user's role matches the required role for the route

### Issue: Tables not showing in Supabase Dashboard

**Solutions**:
1. Re-run the SQL schema file
2. Check for SQL errors in the Supabase SQL Editor
3. Ensure you're looking at the "public" schema

## Next Steps

After setting up the basic infrastructure:

1. **Create Test Data**: Use the Supabase Table Editor to add sample data
2. **Customize Email Templates**: Configure branded email templates in Supabase
3. **Implement Dashboards**: Connect dashboard components to fetch real data
4. **Add AI Features**: Integrate Groq API for AI assistant functionality
5. **File Upload**: Configure Supabase Storage for document uploads
6. **Testing**: Test all user flows (registration, login, dashboard access)

## Development Workflow

1. **Local Development**:
   ```bash
   npm run dev
   ```

2. **Make Changes**: Edit components and services as needed

3. **Test**: Register users with different roles and test functionality

4. **Build**:
   ```bash
   npm run build
   ```

5. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

## Support

For issues or questions:
1. Check the browser console for error messages
2. Review Supabase logs in the Dashboard
3. Verify all environment variables are set correctly
4. Ensure database schema is created properly

---

**Created**: 2026-01-18
**Version**: 1.0.0
