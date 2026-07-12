---
type: "DEVLOG"
title: "Suýt làm Nuxtjs và cuối cùng chốt Astro"
date: "2026-07-12"
projectId: "portfolio"
---

Ban đầu định làm portfolio bằng Nuxt.js vì mình biết Vue, và cũng tò mò về Nuxt.js.

Sau khi setup xong Supabase, viết được trang đầu tiên. Đến lúc gần xong mới nhận ra làm bằng Astro sẽ tiện hơn cho portfolio, vì đây là trang chủ yếu để _đọc_ nội dung (dự án, bài viết) chứ không có tương tác phức tạp gì — không cần giữ lại cả bộ máy reactivity của Vue chạy trên trình duyệt cho mỗi trang. Astro mặc định không gửi JS xuống client trừ khi mình chỉ định, nên trang nhẹ và load nhanh hơn hẳn. Astro còn có sẵn Content Collections — đúng kiểu mô hình project/devlog/thought mình đang cần nên bỏ luôn được Supabase, không phải setup database, RLS gì cả nữa.

Bài học: nên xác định trang mình làm thuộc loại nào (chủ yếu hiển thị nội dung tĩnh, hay cần tương tác nhiều) trước khi chọn framework — không phải cứ biết sẵn công nghệ nào thì dùng công nghệ đó.
