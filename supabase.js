// Supabase client (hardcoded - provided by user)
const SUPABASE_URL = "https://pmvjgkvxdydenykpqfrj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdmpna3Z4ZHlkZW55a3BxZnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyODY0NjksImV4cCI6MjA3Mzg2MjQ2OX0.K0kR01w1xIpkNyilNHrD66Dq3lm1_9X8CdHV0kgXAGU";

window.supabase = window.supabase || {};
(function(){
  if (!window.supabase || !window.supabase.createClient) return;
  window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
