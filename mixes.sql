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
(46, 43, 23, '2024-07-02 10:09:34', '2024-07-02 10:09:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mixes`
--
ALTER TABLE `mixes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mixes`
--
ALTER TABLE `mixes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
