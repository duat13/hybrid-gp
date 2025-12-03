// supabase.js
// Initialisiert die Verbindung zu deinem Supabase-Projekt

const SUPABASE_URL = "https://gospcjrviuomqptsofrw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc3BjanJ2aXVvbXFwdHNvZnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MjI3NzgsImV4cCI6MjA4MDI5ODc3OH0.JASHOTvfncLtj1p28e_zNq2mPPFQyaxtOd4h2xjGNKM";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
