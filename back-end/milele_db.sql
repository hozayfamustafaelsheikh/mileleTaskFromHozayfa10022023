-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2023 at 09:10 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `milele_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Black', '2023-02-10 16:53:16', '2023-02-10 16:53:16', '2023-02-10 16:53:16'),
(2, 'White', '2023-02-10 16:53:16', '2023-02-10 16:53:16', '2023-02-10 16:53:16'),
(3, 'Blue', '2023-02-10 16:53:25', '2023-02-10 16:53:25', '2023-02-10 16:53:25'),
(4, 'Red', '2023-02-10 16:53:25', '2023-02-10 16:53:25', '2023-02-10 16:53:25'),
(5, 'Green', '2023-02-10 16:53:32', '2023-02-10 16:53:32', '2023-02-10 16:53:32'),
(6, 'Silver', '2023-02-10 16:53:32', '2023-02-10 16:53:32', '2023-02-10 16:53:32');

-- --------------------------------------------------------

--
-- Table structure for table `datas`
--

CREATE TABLE `datas` (
  `id` int(11) NOT NULL,
  `Jan` varchar(255) DEFAULT NULL,
  `Feb` varchar(255) DEFAULT NULL,
  `Mar` varchar(255) DEFAULT NULL,
  `Apr` varchar(255) DEFAULT NULL,
  `May` varchar(255) DEFAULT NULL,
  `Jun` varchar(255) DEFAULT NULL,
  `Jul` varchar(255) DEFAULT NULL,
  `Aug` varchar(255) DEFAULT NULL,
  `Sep` varchar(255) DEFAULT NULL,
  `Oct` varchar(255) DEFAULT NULL,
  `Nov` varchar(255) DEFAULT NULL,
  `Dec` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `steeringType` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `supplierId` int(11) DEFAULT NULL,
  `wholesellerId` int(11) DEFAULT NULL,
  `sfxId` int(11) DEFAULT NULL,
  `modelId` int(11) DEFAULT NULL,
  `variantId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `datas`
--

INSERT INTO `datas` (`id`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`, `year`, `steeringType`, `deletedAt`, `createdAt`, `updatedAt`, `supplierId`, `wholesellerId`, `sfxId`, `modelId`, `variantId`, `colorId`) VALUES
(1, '10', '25', '62', '22', '52', '56', '6', '3', '2', '6', '15', '18', '23', 'RHD', '2023-02-10 18:12:26', '2023-02-10 18:12:26', '2023-02-10 19:32:57', 1, 1, 1, 1, 1, 1),
(2, '20', '98', '20', '54', '52', '76', '98', '12', '23', '43', '54', '65', '65', 'RHD', '2023-02-10 18:12:26', '2023-02-10 18:12:26', '2023-02-10 19:32:57', 1, 1, 1, 1, 1, 1),
(3, '1', '1', '1', '11', '1', '1', '1', '1', '1', '1', '1', '1', '23', 'RHD', NULL, '2023-02-10 19:29:04', '2023-02-10 19:32:57', 1, 1, 1, 1, 1, 1),
(4, '23', '8', '9', '9', '9', '9', '9', '2', '2', '2', '1', '1', '23', 'RHD', NULL, '2023-02-10 19:29:04', '2023-02-10 19:32:57', 1, 1, 1, 1, 1, 1),
(5, '1', '32', '8', '9', '56', '5', '66', '56', '56', '565', '656', '56', '23', 'RHD', NULL, '2023-02-10 19:36:12', '2023-02-10 19:36:12', 1, 1, 1, 1, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Model One', '2023-02-10 16:17:55', '2023-02-10 16:17:55', '2023-02-10 16:17:55'),
(2, 'Model Two', '2023-02-10 16:17:55', '2023-02-10 16:17:55', '2023-02-10 16:17:55');

-- --------------------------------------------------------

--
-- Table structure for table `sfxes`
--

CREATE TABLE `sfxes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `modelId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sfxes`
--

INSERT INTO `sfxes` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`, `modelId`) VALUES
(1, 'Model one A1', '2023-02-10 16:18:25', '2023-02-10 16:18:25', '2023-02-10 16:18:25', 1),
(2, 'Model one A2', '2023-02-10 16:18:25', '2023-02-10 16:18:25', '2023-02-10 16:18:25', 1),
(3, 'Model two B1', '2023-02-10 16:18:48', '2023-02-10 16:18:48', '2023-02-10 16:18:48', 2),
(4, 'Model two B2', '2023-02-10 16:18:48', '2023-02-10 16:18:48', '2023-02-10 16:18:48', 2);

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'Supplier One', '2023-02-10 15:01:22', '2023-02-10 15:01:22', '2023-02-10 15:01:22'),
(2, 'Supplier Two', '2023-02-10 15:01:22', '2023-02-10 15:01:22', '2023-02-10 15:01:22');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `modelId` int(11) DEFAULT NULL,
  `sfxId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`, `modelId`, `sfxId`) VALUES
(1, 'SomeCar_1', '2023-02-10 16:25:35', '2023-02-10 16:25:35', '2023-02-10 16:25:35', 1, 1),
(2, 'SomeCar_2', '2023-02-10 16:25:35', '2023-02-10 16:25:35', '2023-02-10 16:25:35', 2, 3),
(3, 'SomeCar_4', '2023-02-10 16:26:09', '2023-02-10 16:26:09', '2023-02-10 16:26:09', 1, 2),
(4, 'SomeCar_5', '2023-02-10 16:26:09', '2023-02-10 16:26:09', '2023-02-10 16:26:09', 2, 4),
(5, 'SomeCar_6', '2023-02-10 16:25:35', '2023-02-10 16:25:35', '2023-02-10 16:25:35', 1, 1),
(6, 'SomeCar_7', '2023-02-10 16:25:35', '2023-02-10 16:25:35', '2023-02-10 16:25:35', 2, 3),
(7, 'SomeCar_8', '2023-02-10 16:26:09', '2023-02-10 16:26:09', '2023-02-10 16:26:09', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `wholesellers`
--

CREATE TABLE `wholesellers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `supplierId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wholesellers`
--

INSERT INTO `wholesellers` (`id`, `name`, `deletedAt`, `createdAt`, `updatedAt`, `supplierId`) VALUES
(1, 'Whole Seller One Supplier One', '2023-02-10 15:15:10', '2023-02-10 15:15:10', '2023-02-10 15:15:10', 1),
(2, 'Whole Seller Two Supplier One', '2023-02-10 15:15:10', '2023-02-10 15:15:10', '2023-02-10 15:15:10', 1),
(3, 'Whole Seller One Supplier two', '2023-02-10 15:16:04', '2023-02-10 15:16:04', '2023-02-10 15:16:04', 2),
(4, 'Whole Seller two Supplier two', '2023-02-10 15:16:04', '2023-02-10 15:16:04', '2023-02-10 15:16:04', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `datas`
--
ALTER TABLE `datas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplierId` (`supplierId`),
  ADD KEY `wholesellerId` (`wholesellerId`),
  ADD KEY `sfxId` (`sfxId`),
  ADD KEY `modelId` (`modelId`),
  ADD KEY `variantId` (`variantId`),
  ADD KEY `colorId` (`colorId`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sfxes`
--
ALTER TABLE `sfxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modelId` (`modelId`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `modelId` (`modelId`),
  ADD KEY `sfxId` (`sfxId`);

--
-- Indexes for table `wholesellers`
--
ALTER TABLE `wholesellers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplierId` (`supplierId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `datas`
--
ALTER TABLE `datas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sfxes`
--
ALTER TABLE `sfxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wholesellers`
--
ALTER TABLE `wholesellers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `datas`
--
ALTER TABLE `datas`
  ADD CONSTRAINT `datas_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `suppliers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `datas_ibfk_2` FOREIGN KEY (`wholesellerId`) REFERENCES `wholesellers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `datas_ibfk_3` FOREIGN KEY (`sfxId`) REFERENCES `sfxes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `datas_ibfk_4` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `datas_ibfk_5` FOREIGN KEY (`variantId`) REFERENCES `variants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `datas_ibfk_6` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sfxes`
--
ALTER TABLE `sfxes`
  ADD CONSTRAINT `sfxes_ibfk_1` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`modelId`) REFERENCES `models` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `variants_ibfk_2` FOREIGN KEY (`sfxId`) REFERENCES `sfxes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `wholesellers`
--
ALTER TABLE `wholesellers`
  ADD CONSTRAINT `wholesellers_ibfk_1` FOREIGN KEY (`supplierId`) REFERENCES `suppliers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
