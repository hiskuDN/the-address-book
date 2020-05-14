SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `city_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `address` (`id`, `first_name`, `last_name`, `email`, `street`, `zip_code`, `city_id`) VALUES
(8, 'Mehret', 'Ephrem', 'mehretephrem@gmail.com', 'Seongsan-ro 18-gil 24', '3727', 1),
(13, 'Ziku', 'Dingeto', 'hiskias.melke1@gmail.com', 'Seongsan-ro 18-gil 24', '3727', 1),
(15, 'Dagi', 'Mekonnen', 'dagix@gmail.com', 'Kaliti, Addis Ababa', '1111', 1);

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cities` (`id`, `city`) VALUES
(1, 'Seoul'),
(2, 'Jeju'),
(3, 'Busan'),
(4, 'Gwangju');

ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id_constraint` (`city_id`);

ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `address`
  ADD CONSTRAINT `city_id_constraint` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
