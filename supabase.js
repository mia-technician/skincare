// supabase.js 最终版（替换原有内容）
// 销毁旧实例（解决缓存）
if (window.supabase) delete window.supabase;

// 重新创建全局实例
window.supabase = supabase.createClient(
  "https://dmrskyskryrdclknezth.supabase.co",
  "你的 anon public key" // 替换成自己的密钥
);

// 强制清除登录状态缓存（可选，极端情况用）
window.supabase.auth.removeSession();
