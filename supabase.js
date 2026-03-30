// 全局共享 Supabase
const supabase = supabase.createClient(
  "https://dmrskyskryrdclknezth.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtcnNreXNrcnlyZGNsa25lenRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzE2MzgsImV4cCI6MjA4OTk0NzYzOH0.Dnced4YAY24fE6kLxOe9YuR6Wrgt8pYcqKcjMFWDrY8"
);

// 让所有页面都能使用
window.supabase = supabase;
