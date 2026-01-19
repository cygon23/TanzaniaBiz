-- Database Setup Verification Script
-- Run this in Supabase SQL Editor to check if your database is properly configured

-- Check if custom types exist
SELECT 'Custom Types' as check_category,
       typname as name,
       'EXISTS' as status
FROM pg_type
WHERE typname IN ('user_role', 'business_stage', 'compliance_status', 'session_status')
ORDER BY typname;

-- Check if enum values are correct for user_role
SELECT 'user_role enum values' as check_category,
       enumlabel as value,
       'OK' as status
FROM pg_enum
WHERE enumtypid = 'user_role'::regtype
ORDER BY enumsortorder;

-- Check if tables exist
SELECT 'Tables' as check_category,
       tablename as name,
       'EXISTS' as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'profiles', 'businesses', 'business_plans', 'compliance_records',
    'mentor_profiles', 'mentorships', 'mentor_sessions',
    'company_profiles', 'programs', 'activities'
  )
ORDER BY tablename;

-- Check if RLS is enabled
SELECT 'Row Level Security' as check_category,
       tablename as name,
       CASE
         WHEN rowsecurity THEN 'ENABLED ✓'
         ELSE 'DISABLED ✗'
       END as status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename IN (
    'profiles', 'businesses', 'business_plans', 'compliance_records',
    'mentor_profiles', 'mentorships', 'mentor_sessions',
    'company_profiles', 'programs', 'activities'
  )
ORDER BY tablename;

-- Check if trigger exists
SELECT 'Triggers' as check_category,
       trigger_name as name,
       event_object_table as table_name,
       'EXISTS' as status
FROM information_schema.triggers
WHERE trigger_schema = 'public'
  OR (trigger_schema = 'auth' AND event_object_table = 'users');

-- Check if handle_new_user function exists
SELECT 'Functions' as check_category,
       routine_name as name,
       'EXISTS' as status
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name = 'handle_new_user';

-- Count records in key tables
SELECT 'Record Counts' as check_category,
       'profiles' as table_name,
       COUNT(*)::text as count
FROM profiles
UNION ALL
SELECT 'Record Counts', 'businesses', COUNT(*)::text FROM businesses
UNION ALL
SELECT 'Record Counts', 'business_plans', COUNT(*)::text FROM business_plans
UNION ALL
SELECT 'Record Counts', 'mentor_profiles', COUNT(*)::text FROM mentor_profiles;

-- Final summary
SELECT '=== SUMMARY ===' as check_category,
       CASE
         WHEN EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role')
              AND EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles')
              AND EXISTS (SELECT 1 FROM information_schema.routines WHERE routine_schema = 'public' AND routine_name = 'handle_new_user')
         THEN '✓ Database is properly configured'
         ELSE '✗ Database setup is INCOMPLETE - Run supabase-schema.sql'
       END as status,
       '' as details;
