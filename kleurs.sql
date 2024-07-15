-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Jul 15, 2024 at 04:03 PM
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
(2, 'Beige', '#F5F5DC', '2024-07-09 11:59:42', NULL),
(3, 'Blauw', '#0000ff', '2024-07-09 11:59:42', NULL),
(4, 'Brons', '#CD7F32', '2024-07-09 11:59:42', NULL),
(5, 'Bruin', '#a5682a', '2024-07-09 11:59:42', '2024-07-09 11:59:42'),
(6, 'Geel', '#FFFF00', '2024-07-09 12:04:42', '2024-07-09 12:04:42'),
(7, 'Goud', '#FFD700', '2024-07-09 12:06:38', '2024-07-09 12:06:38'),
(8, 'Grijs', '#808080', '2024-07-09 12:09:08', '2024-07-09 12:09:08'),
(9, 'Zwart', '#000', NULL, NULL),
(10, 'Roze', '#ffc0cb', NULL, NULL),
(11, 'Wit', '#fff', NULL, NULL),
(12, 'Paars', '#eabfff', NULL, NULL),
(13, 'Rood', '#FF0000', NULL, NULL),
(15, 'Groen', '#6eaa5e', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kleurs`
--
ALTER TABLE `kleurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kleurs`
--
ALTER TABLE `kleurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
