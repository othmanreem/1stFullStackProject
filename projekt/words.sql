-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 18 mars 2024 kl 10:07
-- Serverversion: 5.7.39
-- PHP-version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `ro222it`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `Score`
--

CREATE TABLE `Score` (
  `points` varchar(1) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  `date` timestamp(5) NOT NULL DEFAULT CURRENT_TIMESTAMP(5) ON UPDATE CURRENT_TIMESTAMP(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Score`
--

INSERT INTO `Score` (`points`, `user_id`, `date`) VALUES
('0', '104444882577305255727', '2024-03-18 08:17:40.00000'),
('0', '111288556041718232549', '2024-03-18 09:24:16.00000');

-- --------------------------------------------------------

--
-- Tabellstruktur `Users`
--

CREATE TABLE `Users` (
  `user_full_name` varchar(25) NOT NULL,
  `id` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Users`
--

INSERT INTO `Users` (`user_full_name`, `id`) VALUES
('Reem Othman', '104444882577305255727'),
('Reem Othman', '111288556041718232549');

-- --------------------------------------------------------

--
-- Tabellstruktur `Words_array`
--

CREATE TABLE `Words_array` (
  `user_id` varchar(25) NOT NULL,
  `array` varchar(100) NOT NULL,
  `id` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Words_array`
--

INSERT INTO `Words_array` (`user_id`, `array`, `id`) VALUES
('111288556041718232549', '[\"battery\",\"deactivation\",\"clatter\",\"meteoric\",\"embrace\"]', 111),
('111288556041718232549', '[\"South\",\"meritorious\",\"muggy\",\"unchartered\",\"carotene\"]', 112),
('111288556041718232549', '[\"reverse\",\"Thai\",\"discordantly\",\"pizzicato\",\"politician\"]', 113),
('111288556041718232549', '[\"reverse\",\"Thai\",\"discordantly\",\"pizzicato\",\"politician\"]', 114),
('111288556041718232549', '[\"watch\",\"prim\",\"periwinkle\",\"repositing\",\"pigment\"]', 115),
('111288556041718232549', '[\"handsomeness\",\"shaking\",\"Lubavitcher\",\"preference\",\"walk\"]', 116),
('111288556041718232549', '[\"henry\",\"conjugation\",\"waning\",\"chondrite\",\"Woolf\"]', 117),
('111288556041718232549', '[\"module\",\"indweller\",\"lumbar\",\"proofed\",\"Boidae\"]', 118),
('111288556041718232549', '[\"module\",\"indweller\",\"lumbar\",\"proofed\",\"Boidae\"]', 119),
('111288556041718232549', '[\"peptide\",\"ball\",\"publicist\",\"dim\",\"hearts\"]', 120),
('111288556041718232549', '[\"homocercal\",\"Argentinian\",\"explication\",\"words\",\"parity\"]', 121),
('111288556041718232549', '[\"effete\",\"centesimal\",\"depersonalization\",\"karaoke\",\"darken\"]', 122),
('111288556041718232549', '[\"Biloxi\",\"androgenic\",\"Eisenstaedt\",\"annex\",\"buckle\"]', 123),
('111288556041718232549', '[\"trembles\",\"gaiter\",\"stirring\",\"experiential\",\"bubbliness\"]', 124),
('111288556041718232549', '[\"graze\",\"nonrational\",\"mandarin\",\"allergist\",\"threat\"]', 125),
('111288556041718232549', '[\"drowse\",\"beard\",\"dressed\",\"ketone\",\"tangerine\"]', 126),
('111288556041718232549', '[\"Wolf\",\"philhellene\",\"under\",\"draw\",\"cerebellar\"]', 127),
('111288556041718232549', '[\"corporatist\",\"ear\",\"impingement\",\"positively\",\"zayin\"]', 128),
('111288556041718232549', '[\"coltsfoot\",\"particle\",\"rein\",\"docile\",\"perfumer\"]', 129),
('111288556041718232549', '[\"coltsfoot\",\"particle\",\"rein\",\"docile\",\"perfumer\"]', 130),
('111288556041718232549', '[\"coltsfoot\",\"particle\",\"rein\",\"docile\",\"perfumer\"]', 131),
('111288556041718232549', '\"[\\\"nonprofessional\\\",\\\"Basilicata\\\",\\\"pocket\\\",\\\"easy\\\",\\\"angiopteris\\\"]\"', 132),
('111288556041718232549', '\"[\\\"yurt\\\",\\\"redundancy\\\",\\\"infectious\\\",\\\"Burlington\\\",\\\"alphabetized\\\"]\"', 133),
('111288556041718232549', '\"[\\\"Pholidae\\\",\\\"pallet\\\",\\\"taxable\\\",\\\"nephrosclerosis\\\",\\\"Nahuatl\\\"]\"', 134),
('111288556041718232549', '\"[\\\"miniate\\\",\\\"debenture\\\",\\\"delivery\\\",\\\"flatiron\\\",\\\"quaintly\\\"]\"', 135),
('111288556041718232549', '\"[\\\"evidential\\\",\\\"insult\\\",\\\"puncture\\\",\\\"ulcerative\\\",\\\"Champlain\\\"]\"', 136),
('111288556041718232549', '\"[\\\"tinderbox\\\",\\\"pervert\\\",\\\"keeshond\\\",\\\"Klondike\\\",\\\"Wilkes\\\"]\"', 137),
('111288556041718232549', '\"[\\\"tinderbox\\\",\\\"pervert\\\",\\\"keeshond\\\",\\\"Klondike\\\",\\\"Wilkes\\\"]\"', 138),
('111288556041718232549', '\"[\\\"annually\\\",\\\"bowl\\\",\\\"logistic\\\",\\\"livery\\\",\\\"professedly\\\"]\"', 139),
('111288556041718232549', '\"[\\\"intumescence\\\",\\\"consequence\\\",\\\"medicative\\\",\\\"spore\\\",\\\"putrid\\\"]\"', 140),
('111288556041718232549', '\"[\\\"scatology\\\",\\\"occurrent\\\",\\\"harbinger\\\",\\\"Vilnius\\\",\\\"appraisal\\\"]\"', 141),
('111288556041718232549', '\"[\\\"cleaner\\\",\\\"infinitely\\\",\\\"unmemorably\\\",\\\"outpoint\\\",\\\"noise\\\"]\"', 142),
('111288556041718232549', '\"[\\\"razbliuto\\\",\\\"incorporate\\\",\\\"retrievable\\\",\\\"muscular\\\",\\\"project\\\"]\"', 143),
('111288556041718232549', '\"[\\\"tattler\\\",\\\"butcher\\\",\\\"Vesta\\\",\\\"ossification\\\",\\\"bacteroid\\\"]\"', 144),
('111288556041718232549', '\"[\\\"tattler\\\",\\\"butcher\\\",\\\"Vesta\\\",\\\"ossification\\\",\\\"bacteroid\\\"]\"', 145),
('111288556041718232549', '\"[\\\"pastoral\\\",\\\"ensuing\\\",\\\"maceration\\\",\\\"fascism\\\",\\\"commonplace\\\"]\"', 146),
('111288556041718232549', '\"[\\\"fractionation\\\",\\\"tome\\\",\\\"Marseillaise\\\",\\\"business\\\",\\\"tophus\\\"]\"', 147),
('111288556041718232549', '\"[\\\"crooked\\\",\\\"Weisshorn\\\",\\\"ask\\\",\\\"castigation\\\",\\\"glassworks\\\"]\"', 148),
('111288556041718232549', '\"[\\\"splenic\\\",\\\"barrel\\\",\\\"corruption\\\",\\\"vehicle\\\",\\\"Ictonyx\\\"]\"', 149),
('111288556041718232549', '\"[\\\"cybernetics\\\",\\\"enlightening\\\",\\\"herpes\\\",\\\"gruffly\\\",\\\"Palmae\\\"]\"', 150),
('111288556041718232549', '\"[\\\"cybernetics\\\",\\\"enlightening\\\",\\\"herpes\\\",\\\"gruffly\\\",\\\"Palmae\\\"]\"', 151),
('111288556041718232549', '\"[\\\"cybernetics\\\",\\\"enlightening\\\",\\\"herpes\\\",\\\"gruffly\\\",\\\"Palmae\\\"]\"', 152),
('111288556041718232549', '\"[\\\"bobsled\\\",\\\"snub\\\",\\\"tanned\\\",\\\"peel\\\",\\\"pilferage\\\"]\"', 153),
('111288556041718232549', '\"[\\\"casually\\\",\\\"Albert\\\",\\\"Goldberg\\\",\\\"macroeconomic\\\",\\\"inconclusive\\\"]\"', 154),
('111288556041718232549', '\"[\\\"annelid\\\",\\\"constitution\\\",\\\"dispose\\\",\\\"arsonist\\\",\\\"drumming\\\"]\"', 155),
('111288556041718232549', '\"[\\\"Caledonia\\\",\\\"gang\\\",\\\"good\\\",\\\"Aconcagua\\\",\\\"colloquially\\\"]\"', 156),
('111288556041718232549', '\"[\\\"gemmule\\\",\\\"azithromycin\\\",\\\"antiquity\\\",\\\"jump\\\",\\\"Boniface\\\"]\"', 157),
('111288556041718232549', '\"[\\\"exportable\\\",\\\"Mercenaria\\\",\\\"call\\\",\\\"Barranquilla\\\",\\\"cuff\\\"]\"', 158),
('111288556041718232549', '\"[\\\"Cockaigne\\\",\\\"rightly\\\",\\\"Kuhn\\\",\\\"suit\\\",\\\"uncousinly\\\"]\"', 159);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Words_array`
--
ALTER TABLE `Words_array`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Words_array`
--
ALTER TABLE `Words_array`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
