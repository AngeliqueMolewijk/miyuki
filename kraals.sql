-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 03, 2024 at 03:55 PM
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
(4, '233', 'ceylon light daffodil 233', 0, '202407021103miyuki_delica11_233 (1).jpg', '2024-06-20 06:03:33', '2024-07-02 09:03:03'),
(5, '235', 'ceylon salmon 235', 0, '202406201220miyuki_delica11_235.jpg', '2024-06-20 10:20:35', '2024-06-20 10:20:35'),
(6, '236', 'ceylon carnation pink 236', 5, '202406210733miyuki_delica11_236.jpg', '2024-06-21 05:33:07', '2024-07-02 03:51:40'),
(7, '238', 'ceylon aqua green 238', 0, '202406210733miyuki_delica11_238.jpg', '2024-06-21 05:33:55', '2024-06-21 05:33:55'),
(8, '240', 'ceylon dark sky blue 240', 0, '202406210734miyuki_delica11_240.jpg', '2024-06-21 05:34:19', '2024-06-21 05:34:19'),
(9, '1567', 'opaque luster sea opal 1567', 0, '202406270908miyuki_delica11_1567.jpg', '2024-06-27 07:08:53', '2024-06-27 07:08:53'),
(10, '1834F', '11/0 - duracoat galvanized matte champagne 1834F', 0, '202406270910miyuki_delica11_1834f.jpg', '2024-06-27 07:10:22', '2024-06-27 07:10:22'),
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
(42, '1135', 'opaque avocado 1135', NULL, '202407021205miyuki_delica11_1135.jpg', '2024-07-02 10:05:21', '2024-07-02 10:05:21'),
(43, 'mix52', 'sweet dreams mix52', 5, '202407021207miyuki_delica11_mix52.jpg', '2024-07-02 10:07:01', '2024-07-02 10:07:01'),
(44, '356', 'opaque matte light mauve 356', 0, '202407021207miyuki_delica11_356.jpg', '2024-07-02 10:07:20', '2024-07-02 10:07:20'),
(45, '377', 'metallic matte - royal blue 377', 0, '202407021207miyuki_delica11_377.jpg', '2024-07-02 10:07:39', '2024-07-02 10:07:39'),
(46, '1490', 'opaque bisque white 1490 - niet meer leverbaar', 0, '202407021208miyuki_delica11_1490.jpg', '2024-07-02 10:08:00', '2024-07-02 10:08:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kraals`
--
ALTER TABLE `kraals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kralen_nummer_unique` (`nummer`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kraals`
--
ALTER TABLE `kraals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
