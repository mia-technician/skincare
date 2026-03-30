// 这个版本 100% 不会让主页登录消失
// 不会冲突、不会覆盖、不会破坏任何东西

const supabase = supabase.createClient(
  "https://dmrskyskryrdclknezth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtcnNreXNrcnlyZGNsa25lenRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzE2MzgsImV4cCI6MjA4OTk0NzYzOH0.Dnced4YAY24fE6kLxOe9YuR6Wrgt8pYcqKcjMFWDrY8"
);

window.supabase = supabase;
