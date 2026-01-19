-- Comprehensive Auth Diagnosis Script
-- Run this to see exactly what's wrong with the auth setup

-- Check 1: Verify user_role enum exists and has correct values
SELECT
  '1. user_role ENUM' as check_name,
  enumlabel as value,
  enumsortorder as sort_order
FROM pg_enum
WHERE enumtypid = 'user_role'::regtype
ORDER BY enumsortorder;

-- Check 2: Verify profiles table structure
SELECT
  '2. profiles table columns' as check_name,
  column_name,
  data_type,
  udt_name,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'profiles'
ORDER BY ordinal_position;

-- Check 3: Check if trigger exists
SELECT
  '3. Trigger' as check_name,
  trigger_name,
  event_manipulation,
  event_object_schema,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- Check 4: Check if function exists and get its definition
SELECT
  '4. Function' as check_name,
  routine_name,
  routine_type,
  data_type as return_type
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND routine_name = 'handle_new_user';

-- Check 5: Get the actual function definition
SELECT
  '5. Function Definition' as check_name,
  pg_get_functiondef(oid) as function_definition
FROM pg_proc
WHERE proname = 'handle_new_user'
  AND pronamespace = 'public'::regnamespace;

-- Check 6: Check for existing users in auth.users
SELECT
  '6. Existing Users' as check_name,
  COUNT(*) as user_count
FROM auth.users;

-- Check 7: Check for existing profiles
SELECT
  '7. Existing Profiles' as check_name,
  COUNT(*) as profile_count
FROM public.profiles;

-- Check 8: Check RLS policies on profiles table
SELECT
  '8. RLS Policies' as check_name,
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'profiles';

-- Check 9: Verify profiles table RLS is enabled
SELECT
  '9. RLS Status' as check_name,
  schemaname,
  tablename,
  CASE
    WHEN rowsecurity THEN 'ENABLED ✓'
    ELSE 'DISABLED ✗'
  END as rls_status
FROM pg_tables
WHERE schemaname = 'public'
  AND tablename = 'profiles';
