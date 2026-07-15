---
terminal_path: "~/cineticket"
version: "v2.0.0"
title: "Cinema Ticket"
description: |
    Hệ thống quản lý rạp chiếu phim và đặt vé trực tuyến tích hợp AI,
    giúp người dùng đặt vé nhanh chóng và quản trị viên điều phối hoạt động
    rạp phim hiệu quả từ một nền tảng duy nhất.
image_src: "/images/cineticket-cover.png"
image_alt: "Giao diện hệ thống đặt vé phim tích hợp Chatbot AI"
tags: ["ASP.NET Core", "Vue 3", "SQL Server", "Docker", "Gemini AI"]
links:
    - label: "$./project detail"
      href: "/projects/cineticket"
      isPrimary: true
    - label: "$ cat source.git"
      href: "https://github.com/PhhHuynn/DotNet-Cinema"
      isPrimary: false
featured: true
stats:
    - label: "STATUS"
      value: "IN_PROGRESS"
    - label: "DEPLOY_DATE"
      value: "12/07/2026"
    - label: "ARCHITECTURE"
      value: "FULL_STACK_WEB_APP"
    - label: "UI_ENGINE"
      value: "VUE_3"
---

## Vấn đề

Quy trình đặt vé xem phim còn thủ công, khiến khách chờ lâu, nhân viên khó theo dõi suất chiếu, và hệ thống thiếu công cụ hỗ trợ tra cứu thông minh cho người dùng.

## Cách làm

Xây dựng hệ thống full-stack (ASP.NET Core + Vue 3 + SQL Server) với phân quyền Admin/Staff/Manager/Customer, xác thực JWT, thanh toán online, upload ảnh Cloudinary, triển khai Docker Compose. **Điểm nhấn: tích hợp chatbot AI (Gemini)** hỗ trợ tra cứu thông tin nhanh cho người dùng.

## Kết quả

Nền tảng đặt vé hiện đại giúp giảm thời gian đặt vé, hạn chế sai sót quản lý, và có khả năng mở rộng cho nhiều rạp/phòng chiếu trong tương lai.
