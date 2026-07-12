---
terminal_path: "~/foodshop"
version: "v2.0.0"
title: "Food Shop"
description: |
    Ứng dụng đặt đồ ăn trực tuyến với quyền hạn phân chia giữa người dùng, nhân viên bán hàng và admin.
    Kết hợp giao diện Vue 3 + Vite với backend ASP.NET Core, Entity Framework và SignalR cho chat realtime.
image_src: "/images/foodshop-cover.png"
image_alt: "Food Shop dashboard preview"
tags: ["ASP.NET Core", "Vue 3", "Entity Framework", "SignalR"]
links:
    - label: "$./project detail"
      href: "/projects/foodshop"
      isPrimary: true
    - label: "$ cat source.git"
      href: "https://github.com/PhhHuynn/FoodShop-NET1051"
      isPrimary: false
featured: false
stats:
    - label: "STATUS"
      value: "IN_PROGRESS"
    - label: "DEPLOY_DATE"
      value: "2026-07-12"
    - label: "ARCHITECTURE"
      value: "FULL_STACK_API"
    - label: "UI_ENGINE"
      value: "VUE_3_VITE"
---

Food Shop là một dự án website đặt đồ ăn online, thiết kế để hỗ trợ:

- người dùng đặt món, quản lý giỏ hàng và xem lịch sử đơn hàng,
- nhân viên bán hàng quản lý đơn hàng,
- admin quản lý người dùng, danh mục, thực phẩm và truy cập chat.
  Backend xây dựng bằng ASP.NET Core, Entity Framework Core và SQL Server. Hệ thống sử dụng Identity + JWT để xác thực, đồng thời hỗ trợ đăng nhập Google. Client là ứng dụng Vue 3 với Vite và Bootstrap, kết nối tới API để thực hiện CRUD, quản lý sản phẩm, đơn hàng và hiển thị trạng thái người dùng.

Dự án cũng tích hợp SignalR để chạy chat realtime giữa khách hàng và nhân viên/admin. Kết quả là một hệ thống full-stack có phân quyền rõ ràng, API REST đầy đủ và trải nghiệm quản lý đơn hàng, sản phẩm, giỏ hàng, cùng chat hỗ trợ trực tiếp.
