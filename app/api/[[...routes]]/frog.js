// اضافه کردن Frog از پکیج frog
const { Frog } = require("frog");

export default function handler(req, res) {
  // ایجاد یک نمونه جدید از Frog
  const app = new Frog({
    hub: {
      apiUrl: "https://hubs.airstack.xyz",
      fetchOptions: {
        headers: {
          "x-airstack-hubs": process.env.AIRSTACK_API_KEY, // مطمئن شوید که کلید API را در فایل env. قرار داده‌اید
        }
      }
    }
  });

  // انجام عملیات مورد نظر یا بازگشت پاسخ
  res.status(200).json({ message: "Frog initialized successfully!" });
}
