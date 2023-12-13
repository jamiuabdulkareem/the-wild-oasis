import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nbsbyhimefldyzbtvuvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ic2J5aGltZWZsZHl6YnR2dXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTQ5OTgsImV4cCI6MjAxNzk3MDk5OH0.xt0RnKfme6yaZJ0X_OnOgWzLe7EbvcTFwvdrMCjmteM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
