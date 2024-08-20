import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nfzgajvmqfosaftoaeum.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5memdhanZtcWZvc2FmdG9hZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1MzcxNjYsImV4cCI6MjAzOTExMzE2Nn0.qFfk1FwjBOHDf8XPFEMEDm5z08IJATbNVR9KJU7OZY4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
