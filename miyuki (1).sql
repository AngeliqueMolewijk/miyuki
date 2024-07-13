-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 12, 2024 at 04:54 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miyuki`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kleurs`
--

CREATE TABLE `kleurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kleur` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hexa` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kleurs`
--

INSERT INTO `kleurs` (`id`, `kleur`, `hexa`, `created_at`, `updated_at`) VALUES
(1, 'aqua', '#00FFFF', '2024-07-09 11:59:42', NULL),
(2, 'beige', '#F5F5DC', '2024-07-09 11:59:42', NULL),
(3, 'blauw', '#0000ff', '2024-07-09 11:59:42', NULL),
(4, 'brons', '#CD7F32', '2024-07-09 11:59:42', NULL),
(5, 'Bruin', '#a5682a', '2024-07-09 11:59:42', '2024-07-09 11:59:42'),
(6, 'Geel', '#FFFF00', '2024-07-09 12:04:42', '2024-07-09 12:04:42'),
(7, 'Goud', '#bf9000', '2024-07-09 12:06:38', '2024-07-09 12:06:38'),
(8, 'Grijs', '#808080', '2024-07-09 12:09:08', '2024-07-09 12:09:08'),
(9, 'zwart', '#000', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kleurtypes`
--

CREATE TABLE `kleurtypes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kraalid` int(11) NOT NULL,
  `kleurid` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kleurtypes`
--

INSERT INTO `kleurtypes` (`id`, `kraalid`, `kleurid`, `created_at`, `updated_at`) VALUES
(1, 4, 6, '2024-07-11 07:52:02', '2024-07-11 07:52:02'),
(2, 4, 5, '2024-07-11 08:51:47', '2024-07-11 08:51:47'),
(4, 7, 3, '2024-07-11 11:20:30', '2024-07-11 11:20:30'),
(5, 35, 6, '2024-07-12 05:38:14', '2024-07-12 05:38:14'),
(6, 19, 9, '2024-07-12 09:37:18', '2024-07-12 09:37:18'),
(7, 29, 4, '2024-07-12 09:40:40', '2024-07-12 09:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `kraals`
--

CREATE TABLE `kraals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nummer` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kraals`
--

INSERT INTO `kraals` (`id`, `nummer`, `name`, `stock`, `image`, `created_at`, `updated_at`) VALUES
(1, 'mix54', 'black and white mix54', 4, '202406200939miyuki_delica11_mix54.jpg', '2024-06-19 09:08:03', '2024-07-02 07:12:13'),
(2, 'mix58', 'blue beach mix58', 10, '202406200939miyuki_delica11_mix58.jpg', NULL, '2024-07-02 07:10:57'),
(3, 'mix115', 'strong ceylon mix115', 5, '202406200711miyuki_delica11_mix115.jpg', '2024-06-20 05:11:12', '2024-06-26 04:48:45'),
(4, '233', 'ceylon light daffodil 233', 10, '202407021103miyuki_delica11_233 (1).jpg', '2024-06-20 06:03:33', '2024-07-11 10:53:32'),
(5, '235', 'ceylon salmon 235', 0, '202406201220miyuki_delica11_235.jpg', '2024-06-20 10:20:35', '2024-06-20 10:20:35'),
(6, '236', 'ceylon carnation pink 236', 5, '202406210733miyuki_delica11_236.jpg', '2024-06-21 05:33:07', '2024-07-02 03:51:40'),
(7, '238', 'ceylon aqua green 238', 0, '202406210733miyuki_delica11_238.jpg', '2024-06-21 05:33:55', '2024-06-21 05:33:55'),
(8, '240', 'ceylon dark sky blue 240', 0, '202406210734miyuki_delica11_240.jpg', '2024-06-21 05:34:19', '2024-06-21 05:34:19'),
(9, '1567', 'opaque luster sea opal 1567', 0, '202406270908miyuki_delica11_1567.jpg', '2024-06-27 07:08:53', '2024-06-27 07:08:53'),
(10, '1834F', 'duracoat galvanized matte champagne 1834F', 0, '202406270910miyuki_delica11_1834f.jpg', '2024-06-27 07:10:22', '2024-07-09 08:24:36'),
(11, '1530', 'opaque ceylon bisque white 1530 - niet meer leverbaar', 0, '202406270911miyuki_delica11_1530.jpg', '2024-06-27 07:11:33', '2024-06-27 07:11:33'),
(12, '2105', 'duracoat opaque dyed beige 2105', 0, '202406270918miyuki_delica11_2105.jpg', '2024-06-27 07:18:51', '2024-06-27 07:18:51'),
(19, '10', 'Miyuki delica\'s 11/0 - opaque black 10', 9, '202407020741miyuki_delica11_10.jpg', '2024-07-02 05:41:48', '2024-07-02 05:41:48'),
(20, '1211', 'Miyuki delica\'s 11/0 - silverlined gray mist 1211', 5, '202407020742miyuki_delica11_1211.jpg', '2024-07-02 05:42:41', '2024-07-02 05:42:41'),
(21, '1538', 'opaque ceylon light smoke 1538', 0, '202407020846miyuki_delica11_1538.jpg', '2024-07-02 06:46:53', '2024-07-02 06:46:53'),
(22, '200', 'Miyuki delica\'s 11/0 - opaque white 200', 8, '202407020852miyuki_delica11_200.jpg', '2024-07-02 06:52:14', '2024-07-02 06:52:14'),
(23, '2131', 'duracoat opaque dyed eucalyptus 2131', 5, '202407021038miyuki_delica11_2131.jpg', '2024-07-02 08:38:19', '2024-07-02 08:38:19'),
(24, '268', 'opaque luster smoke 268', NULL, '202407021113miyuki_delica11_268.jpg', '2024-07-02 09:13:36', '2024-07-02 09:13:36'),
(25, '51', 'earthy tones mix51', 5, '202407021119miyuki_delica11_mix51.jpg', '2024-07-02 09:19:27', '2024-07-02 09:19:27'),
(26, '256', 'ceylon light cinnamon 256', 0, '202407021120miyuki_delica11_256.jpg', '2024-07-02 09:20:10', '2024-07-02 09:20:10'),
(27, '2379', 'fancy lined eucalyptus 2379', 0, '202407021120miyuki_delica11_2379.jpg', '2024-07-02 09:20:37', '2024-07-02 09:20:37'),
(28, '2365', 'duracoat opaque dyed taupe greige 2365', 0, '202407021120miyuki_delica11_2365.jpg', '2024-07-02 09:20:59', '2024-07-02 09:20:59'),
(29, '2504', 'duracoat galvanized rose champagne 2504', 0, '202407021121miyuki_delica11_2504.jpg', '2024-07-02 09:21:22', '2024-07-02 09:21:22'),
(30, '38', 'indian summer mix38', 8, '202407021123miyuki_delica11_mix38.jpg', '2024-07-02 09:23:15', '2024-07-02 09:23:15'),
(31, '380', 'metallic matte iris khaki 380', 0, '202407021123miyuki_delica11_380.jpg', '2024-07-02 09:23:40', '2024-07-02 09:23:40'),
(32, '2107', 'duracoat opaque dyed cedar 2107', 0, '202407021124miyuki_delica11_2107.jpg', '2024-07-02 09:24:03', '2024-07-02 09:24:03'),
(33, '2123', 'duracoat opaque dyed fennel 2123', 0, '202407021158miyuki_delica11_2123.jpg', '2024-07-02 09:58:01', '2024-07-02 09:58:01'),
(34, '1051', 'metallic matte iris bronze gold 1051', 0, '202407021158miyuki_delica11_1051.jpg', '2024-07-02 09:58:26', '2024-07-02 09:58:26'),
(35, '2103', 'duracoat opaque dyed light squash 2103', 0, '202407021158miyuki_delica11_2103.jpg', '2024-07-02 09:58:47', '2024-07-02 09:58:47'),
(36, '2357', 'duracoat opaque dyed moss green 2357', 0, '202407021159miyuki_delica11_2357.jpg', '2024-07-02 09:59:08', '2024-07-02 09:59:08'),
(37, '378', 'metallic matte brick red 378', 0, '202407021159miyuki_delica11_378.jpg', '2024-07-02 09:59:33', '2024-07-02 09:59:33'),
(38, 'mix46', 'autumn field mix46', 4, '202407021204miyuki_delica11_mix46.jpg', '2024-07-02 10:04:01', '2024-07-02 10:04:01'),
(39, '1832', 'duracoat galvanized gold 1832', 0, '202407021204miyuki_delica11_1832.jpg', '2024-07-02 10:04:22', '2024-07-02 10:04:22'),
(40, '2109', 'duracoat opaque dyed sienna 2109', 0, '202407021204miyuki_delica11_2109.jpg', '2024-07-02 10:04:43', '2024-07-02 10:04:43'),
(41, '1134', 'opaque currant 1134', 0, '202407021205miyuki_delica11_1134.jpg', '2024-07-02 10:05:02', '2024-07-02 10:05:02'),
(42, '1135', 'opaque avocado 1135', 0, '202407021205miyuki_delica11_1135.jpg', '2024-07-02 10:05:21', '2024-07-09 03:45:20'),
(43, 'mix52', 'sweet dreams mix52', 5, '202407021207miyuki_delica11_mix52.jpg', '2024-07-02 10:07:01', '2024-07-02 10:07:01'),
(44, '356', 'opaque matte light mauve 356', 0, '202407021207miyuki_delica11_356.jpg', '2024-07-02 10:07:20', '2024-07-02 10:07:20'),
(45, '377', 'metallic matte - royal blue 377', 0, '202407021207miyuki_delica11_377.jpg', '2024-07-02 10:07:39', '2024-07-02 10:07:39'),
(46, '1490', 'opaque bisque white 1490 - niet meer leverbaar', 0, '202407021208miyuki_delica11_1490.jpg', '2024-07-02 10:08:00', '2024-07-02 10:08:18'),
(47, 'mix122', 'mystic mauve mix122', 5, '202407081712miyuki_delica11_mix122 (1).jpg', '2024-07-08 15:12:47', '2024-07-08 15:12:47'),
(48, '1906', 'opaque rosewater 1906', 0, '202407081713miyuki_delica11_1906.jpg', '2024-07-08 15:13:31', '2024-07-08 15:13:31'),
(49, '2355', 'duracoat opaque dyed rosewood purple 2355', 0, '202407081714miyuki_delica11_2355.jpg', '2024-07-08 15:14:12', '2024-07-08 15:14:12'),
(50, '2181', 'duracoat semi fr slv dyed hydrangea 2181', 0, '202407081714miyuki_delica11_2181.jpg', '2024-07-08 15:14:44', '2024-07-08 15:14:44'),
(51, '21', 'plated nickel 21', 5, '202407091011miyuki_delica11_21.jpg', '2024-07-09 08:11:48', '2024-07-09 08:11:48');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_06_19_075608_create_kralen_table', 2),
(5, '2024_06_19_075950_create_mix_table', 3),
(6, '2024_06_19_170020_create_products_table', 4),
(7, '2024_07_09_113840_kleuren', 5),
(8, '2024_07_09_114026_kleurtype', 5);

-- --------------------------------------------------------

--
-- Table structure for table `mixes`
--

CREATE TABLE `mixes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mixnr` int(11) NOT NULL,
  `kraalnr` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mixes`
--

INSERT INTO `mixes` (`id`, `mixnr`, `kraalnr`, `created_at`, `updated_at`) VALUES
(1, 3, 4, NULL, NULL),
(2, 3, 5, NULL, NULL),
(14, 3, 6, '2024-06-21 05:33:18', '2024-06-21 05:33:18'),
(15, 3, 7, '2024-06-21 05:34:32', '2024-06-21 05:34:32'),
(16, 3, 8, '2024-06-21 05:34:37', '2024-06-21 05:34:37'),
(17, 2, 9, '2024-06-27 07:09:05', '2024-06-27 07:09:05'),
(18, 2, 10, '2024-07-02 08:35:49', '2024-07-02 08:35:49'),
(19, 2, 11, '2024-07-02 08:35:59', '2024-07-02 08:35:59'),
(20, 2, 12, '2024-07-02 08:36:07', '2024-07-02 08:36:07'),
(21, 2, 23, '2024-07-02 08:38:26', '2024-07-02 08:38:26'),
(22, 1, 19, '2024-07-02 09:06:53', '2024-07-02 09:06:53'),
(23, 1, 20, '2024-07-02 09:12:23', '2024-07-02 09:12:23'),
(24, 1, 21, '2024-07-02 09:12:34', '2024-07-02 09:12:34'),
(25, 1, 22, '2024-07-02 09:12:41', '2024-07-02 09:12:41'),
(26, 1, 24, '2024-07-02 09:13:41', '2024-07-02 09:13:41'),
(27, 25, 26, '2024-07-02 09:21:42', '2024-07-02 09:21:42'),
(28, 25, 27, '2024-07-02 09:21:50', '2024-07-02 09:21:50'),
(29, 25, 28, '2024-07-02 09:21:58', '2024-07-02 09:21:58'),
(30, 25, 29, '2024-07-02 09:22:05', '2024-07-02 09:22:05'),
(31, 30, 31, '2024-07-02 09:59:55', '2024-07-02 09:59:55'),
(32, 30, 32, '2024-07-02 10:00:00', '2024-07-02 10:00:00'),
(33, 30, 33, '2024-07-02 10:00:11', '2024-07-02 10:00:11'),
(34, 30, 34, '2024-07-02 10:00:20', '2024-07-02 10:00:20'),
(35, 30, 35, '2024-07-02 10:00:28', '2024-07-02 10:00:28'),
(36, 30, 36, '2024-07-02 10:00:40', '2024-07-02 10:00:40'),
(37, 30, 37, '2024-07-02 10:00:49', '2024-07-02 10:00:49'),
(38, 38, 39, '2024-07-02 10:05:47', '2024-07-02 10:05:47'),
(39, 38, 40, '2024-07-02 10:05:54', '2024-07-02 10:05:54'),
(40, 38, 41, '2024-07-02 10:06:02', '2024-07-02 10:06:02'),
(41, 38, 42, '2024-07-02 10:06:12', '2024-07-02 10:06:12'),
(42, 43, 44, '2024-07-02 10:09:04', '2024-07-02 10:09:04'),
(43, 43, 45, '2024-07-02 10:09:10', '2024-07-02 10:09:10'),
(44, 43, 46, '2024-07-02 10:09:20', '2024-07-02 10:09:20'),
(45, 43, 12, '2024-07-02 10:09:27', '2024-07-02 10:09:27'),
(46, 43, 23, '2024-07-02 10:09:34', '2024-07-02 10:09:34'),
(47, 47, 48, '2024-07-08 15:16:19', '2024-07-08 15:16:19'),
(48, 47, 49, '2024-07-08 15:16:29', '2024-07-08 15:16:29'),
(49, 47, 50, '2024-07-08 15:16:38', '2024-07-08 15:16:38'),
(50, 47, 29, '2024-07-08 15:16:47', '2024-07-08 15:16:47');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('irFwdhOOAnKSZYuUtwaharRNrjgrefrkGWUivwhC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQXE2VzhXblptRE9JamF3ZDNXaG54SHlSZHlwdnlNQTg0bWhHdVhXQyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9rbGV1cmVuLzYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1720785335);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kleurs`
--
ALTER TABLE `kleurs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kleurtypes`
--
ALTER TABLE `kleurtypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kraals`
--
ALTER TABLE `kraals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kralen_nummer_unique` (`nummer`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mixes`
--
ALTER TABLE `mixes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kleurs`
--
ALTER TABLE `kleurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kleurtypes`
--
ALTER TABLE `kleurtypes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `kraals`
--
ALTER TABLE `kraals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `mixes`
--
ALTER TABLE `mixes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
