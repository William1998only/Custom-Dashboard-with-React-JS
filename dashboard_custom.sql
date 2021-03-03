-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2020 at 08:25 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dashboard_custom`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu_image`
--

CREATE TABLE `menu_image` (
  `Item_ID` int(11) NOT NULL,
  `Image_Path` varchar(256) NOT NULL,
  `Caption` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_image`
--

INSERT INTO `menu_image` (`Item_ID`, `Image_Path`, `Caption`, `Email`, `menu_name`) VALUES
(1, '/images/about_2.jpg', 'Penjualan', 'WilliamGolden54@gmail.com', 'Sell'),
(2, '/images/person_1.jpg', 'Penjualan 2', 'WilliamGolden54@gmail.com', 'Sell'),
(3, 'C:fakepathimg_2.jpg', 'Tes', 'williamgolden54@gmail.com', 'Sell'),
(4, 'C:fakepathperson_2.jpg', 'Keuntungan', 'williamgolden54@gmail.com', 'Profit');

-- --------------------------------------------------------

--
-- Table structure for table `menu_item`
--

CREATE TABLE `menu_item` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `item_description` varchar(256) NOT NULL,
  `item_image` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menu_item_table_3`
--

CREATE TABLE `menu_item_table_3` (
  `item_id` int(11) NOT NULL,
  `item_1` varchar(256) NOT NULL,
  `item_2` varchar(256) NOT NULL,
  `item_3` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_item_table_3`
--

INSERT INTO `menu_item_table_3` (`item_id`, `item_1`, `item_2`, `item_3`, `Email`, `menu_name`) VALUES
(1, '1', 'Pensil', '10.000', 'WilliamGolden54@gmail.com', 'Sell'),
(3, '1', 'Balon', '5.000', 'WilliamGolden54@gmail.com', 'Profit');

-- --------------------------------------------------------

--
-- Table structure for table `menu_item_table_4`
--

CREATE TABLE `menu_item_table_4` (
  `item_id` int(11) NOT NULL,
  `item_1` varchar(256) NOT NULL,
  `item_2` varchar(256) NOT NULL,
  `item_3` varchar(256) NOT NULL,
  `item_4` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_item_table_4`
--

INSERT INTO `menu_item_table_4` (`item_id`, `item_1`, `item_2`, `item_3`, `item_4`, `Email`, `menu_name`) VALUES
(1, '1', 'Pensil', '10.000', '10', 'WilliamGolden54@gmail.com', 'Sell');

-- --------------------------------------------------------

--
-- Table structure for table `menu_list`
--

CREATE TABLE `menu_list` (
  `menu_id` int(11) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `menu_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_list`
--

INSERT INTO `menu_list` (`menu_id`, `Email`, `menu_name`) VALUES
(8, 'williamgolden54@gmail.com', 'Profit'),
(9, 'williamgolden54@gmail.com', 'Buy'),
(10, '55160025@student.kwikkiangie.ac.id', 'Sell'),
(11, 'williamgolden54@gmail.com', 'Sell');

-- --------------------------------------------------------

--
-- Table structure for table `menu_table_3`
--

CREATE TABLE `menu_table_3` (
  `table_id` int(11) NOT NULL,
  `col_1` varchar(256) NOT NULL,
  `col_2` varchar(256) NOT NULL,
  `col_3` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_table_3`
--

INSERT INTO `menu_table_3` (`table_id`, `col_1`, `col_2`, `col_3`, `Email`, `menu_name`) VALUES
(2, 'No', 'Nama Barang', 'Harga', 'WilliamGolden54@gmail.com', 'Profit'),
(8, 'No', 'Nama', 'Harga', 'williamgolden54@gmail.com', 'Sell'),
(10, 'No', 'Nama', 'Harga', 'WilliamGolden54@gmail.com', 'Buy');

-- --------------------------------------------------------

--
-- Table structure for table `menu_table_4`
--

CREATE TABLE `menu_table_4` (
  `table_id` int(11) NOT NULL,
  `col_1` varchar(256) NOT NULL,
  `col_2` varchar(256) NOT NULL,
  `col_3` varchar(256) NOT NULL,
  `col_4` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `menu_name` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu_table_4`
--

INSERT INTO `menu_table_4` (`table_id`, `col_1`, `col_2`, `col_3`, `col_4`, `Email`, `menu_name`) VALUES
(2, 'No', 'Nama', 'Harga', 'Jumlah', 'williamgolden54@gmail.com', 'Sell'),
(3, 'No', 'Nama Barang', 'Harga Barang', 'Jumlah', 'williamgolden54@gmail.com', 'Profit');

-- --------------------------------------------------------

--
-- Table structure for table `sociallogin`
--

CREATE TABLE `sociallogin` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `ProviderName` varchar(200) NOT NULL,
  `Image` varchar(650) NOT NULL,
  `Token` varchar(650) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sociallogin`
--

INSERT INTO `sociallogin` (`ID`, `Name`, `Email`, `ProviderName`, `Image`, `Token`) VALUES
(111, 'William Golden', 'williamgolden54@gmail.com', 'Google', 'https://lh3.googleusercontent.com/-sEzsWtnqV7o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclZfZZhhQy61sdHLSLO5Cp0we1DxQ/s96-c/photo.jpg', '104919693987479055178'),
(112, 'William Golden', 'williamgolden54@gmail.com', 'Google', 'https://lh3.googleusercontent.com/-sEzsWtnqV7o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclZfZZhhQy61sdHLSLO5Cp0we1DxQ/s96-c/photo.jpg', '104919693987479055178'),
(113, 'William Golden', 'williamgolden54@gmail.com', 'Google', 'https://lh3.googleusercontent.com/-sEzsWtnqV7o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclZfZZhhQy61sdHLSLO5Cp0we1DxQ/s96-c/photo.jpg', '104919693987479055178'),
(114, 'William Golden', 'williamgolden54@gmail.com', 'Google', 'https://lh3.googleusercontent.com/-sEzsWtnqV7o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclZfZZhhQy61sdHLSLO5Cp0we1DxQ/s96-c/photo.jpg', '104919693987479055178');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu_image`
--
ALTER TABLE `menu_image`
  ADD PRIMARY KEY (`Item_ID`);

--
-- Indexes for table `menu_item`
--
ALTER TABLE `menu_item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `menu_item_table_3`
--
ALTER TABLE `menu_item_table_3`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `menu_item_table_4`
--
ALTER TABLE `menu_item_table_4`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `menu_list`
--
ALTER TABLE `menu_list`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `menu_table_3`
--
ALTER TABLE `menu_table_3`
  ADD PRIMARY KEY (`table_id`);

--
-- Indexes for table `menu_table_4`
--
ALTER TABLE `menu_table_4`
  ADD PRIMARY KEY (`table_id`);

--
-- Indexes for table `sociallogin`
--
ALTER TABLE `sociallogin`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu_image`
--
ALTER TABLE `menu_image`
  MODIFY `Item_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_item`
--
ALTER TABLE `menu_item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_item_table_3`
--
ALTER TABLE `menu_item_table_3`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menu_item_table_4`
--
ALTER TABLE `menu_item_table_4`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menu_list`
--
ALTER TABLE `menu_list`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `menu_table_3`
--
ALTER TABLE `menu_table_3`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `menu_table_4`
--
ALTER TABLE `menu_table_4`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sociallogin`
--
ALTER TABLE `sociallogin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
