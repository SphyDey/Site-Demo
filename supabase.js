// Supabase client (hardcoded - provided by user)
const SUPABASE_URL = "https://ivomuzlgbbnbprkfjtaz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2b211emxnYmJuYnBya2ZqdGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NDU4MzUsImV4cCI6MjA3NDAyMTgzNX0.oPE6UVKpbDDvRb2orQdnRMRnYv-KYz9sn03of2e44K4";

window.supabase = window.supabase || {};
(function(){
  if (!window.supabase || !window.supabase.createClient) return;
  window.db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
