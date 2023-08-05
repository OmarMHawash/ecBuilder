-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 05, 2023 at 07:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ec_builder`
--

-- --------------------------------------------------------

--
-- Table structure for table `components`
--

CREATE TABLE `components` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `kind` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `path` varchar(255) NOT NULL,
  `config` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `components`
--

INSERT INTO `components` (`id`, `name`, `kind`, `description`, `path`, `config`, `created_at`, `updated_at`) VALUES
(1, 'headerA', 'header', 'headerA description', '/src/components/Sections/HeaderA', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(2, 'headerB', 'header', 'headerB description', '/src/components/Sections/HeaderB', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(3, 'hero', 'section', 'hero description', '/src/components/Sections/Hero', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(4, 'cards', 'section', 'cards description', '/src/components/Sections/Cards', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(5, 'tabbed', 'section', 'tabbed description', '/src/components/Sections/Tabbed', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(6, 'accordions', 'section', 'accordions description', '/src/components/Sections/Accordions', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(7, 'footerA', 'footer', 'footerA description', '/src/components/Sections/FooterA', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09'),
(8, 'footerB', 'footer', 'footerB description', '/src/components/Sections/FooterB', 'false', '2023-08-05 14:08:09', '2023-08-05 14:08:09');

-- --------------------------------------------------------

--
-- Table structure for table `components_webapps`
--

CREATE TABLE `components_webapps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `component_id` bigint(20) UNSIGNED NOT NULL,
  `webapp_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'default_img',
  `value` varchar(255) NOT NULL DEFAULT 'default_img_path',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images_webapps`
--

CREATE TABLE `images_webapps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `webapp_id` bigint(20) UNSIGNED NOT NULL,
  `image_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_07_08_150916_create_components_table', 1),
(6, '2023_07_18_104330_create_palettes_table', 1),
(7, '2023_07_18_104701_create_webapps_table', 1),
(8, '2023_07_18_105625_create_users_webapps_table', 1),
(9, '2023_07_18_105728_create_components_webapps_table', 1),
(10, '2023_07_21_031146_create_websites_table', 1),
(11, '2023_08_05_160514_create_images_table', 1),
(12, '2023_08_05_160719_create_images_webapps_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `palettes`
--

CREATE TABLE `palettes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL DEFAULT '#000000',
  `background` varchar(255) NOT NULL DEFAULT '#ffffff',
  `primary` varchar(255) NOT NULL DEFAULT '#8fb3ff',
  `secondary` varchar(255) NOT NULL DEFAULT '#ebf1ff',
  `accent` varchar(255) NOT NULL DEFAULT '#a849d7',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `palettes`
--

INSERT INTO `palettes` (`id`, `name`, `text`, `background`, `primary`, `secondary`, `accent`, `created_at`, `updated_at`) VALUES
(1, 'default', '#000000', '#ffffff', '#8fb3ff', '#ebf1ff', '#a849d7', '2023-08-05 13:25:06', '2023-08-05 13:25:06');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pic` varchar(255) NOT NULL DEFAULT 'default_pic',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_webapps`
--

CREATE TABLE `users_webapps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `webapp_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `webapps`
--

CREATE TABLE `webapps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'my-project',
  `description` varchar(1000) NOT NULL DEFAULT 'This is my project',
  `mini_description` varchar(1000) NOT NULL DEFAULT 'short description',
  `logo` varchar(255) NOT NULL DEFAULT 'default_app_logo',
  `palette_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `webapps`
--

INSERT INTO `webapps` (`id`, `name`, `description`, `mini_description`, `logo`, `palette_id`, `created_at`, `updated_at`) VALUES
(4, 'ecBuilder', 'create and export your website in just a few clicks!', 'short description', 'https://cdn.shopaccino.com/cementwale/products/ski-red-bricks-455492_l.jpg?v=402', 1, '2023-08-05 14:14:31', '2023-08-05 14:14:31');

-- --------------------------------------------------------

--
-- Table structure for table `websites`
--

CREATE TABLE `websites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'ecBuilder',
  `description` varchar(1000) DEFAULT NULL,
  `def_proj_path` varchar(255) NOT NULL DEFAULT 'storage/webapps/default_app',
  `domain` varchar(255) NOT NULL DEFAULT 'localhost:8000',
  `client_path` varchar(255) NOT NULL DEFAULT 'app/client',
  `config` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `components_name_unique` (`name`),
  ADD UNIQUE KEY `components_path_unique` (`path`);

--
-- Indexes for table `components_webapps`
--
ALTER TABLE `components_webapps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `components_webapps_component_id_foreign` (`component_id`),
  ADD KEY `components_webapps_webapp_id_foreign` (`webapp_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_webapps`
--
ALTER TABLE `images_webapps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_webapps_webapp_id_foreign` (`webapp_id`),
  ADD KEY `images_webapps_image_id_foreign` (`image_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `palettes`
--
ALTER TABLE `palettes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `palettes_name_unique` (`name`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `users_webapps`
--
ALTER TABLE `users_webapps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_webapps_user_id_foreign` (`user_id`),
  ADD KEY `users_webapps_webapp_id_foreign` (`webapp_id`);

--
-- Indexes for table `webapps`
--
ALTER TABLE `webapps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `webapps_palette_id_foreign` (`palette_id`);

--
-- Indexes for table `websites`
--
ALTER TABLE `websites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `websites_name_unique` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `components`
--
ALTER TABLE `components`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `components_webapps`
--
ALTER TABLE `components_webapps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images_webapps`
--
ALTER TABLE `images_webapps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `palettes`
--
ALTER TABLE `palettes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_webapps`
--
ALTER TABLE `users_webapps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `webapps`
--
ALTER TABLE `webapps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `websites`
--
ALTER TABLE `websites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `components_webapps`
--
ALTER TABLE `components_webapps`
  ADD CONSTRAINT `components_webapps_component_id_foreign` FOREIGN KEY (`component_id`) REFERENCES `components` (`id`),
  ADD CONSTRAINT `components_webapps_webapp_id_foreign` FOREIGN KEY (`webapp_id`) REFERENCES `webapps` (`id`);

--
-- Constraints for table `images_webapps`
--
ALTER TABLE `images_webapps`
  ADD CONSTRAINT `images_webapps_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`),
  ADD CONSTRAINT `images_webapps_webapp_id_foreign` FOREIGN KEY (`webapp_id`) REFERENCES `webapps` (`id`);

--
-- Constraints for table `users_webapps`
--
ALTER TABLE `users_webapps`
  ADD CONSTRAINT `users_webapps_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_webapps_webapp_id_foreign` FOREIGN KEY (`webapp_id`) REFERENCES `webapps` (`id`);

--
-- Constraints for table `webapps`
--
ALTER TABLE `webapps`
  ADD CONSTRAINT `webapps_palette_id_foreign` FOREIGN KEY (`palette_id`) REFERENCES `palettes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
