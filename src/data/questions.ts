import { Question } from '../types';

const MANUAL_QUESTIONS: Question[] = [
  // TAHUN 1 (15 questions)
  {
    id: 't1_q1', tahun: 1, topik: 'Nombor hingga 100', subtopik: 'Turutan',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nombor selepas 14?',
    pilihan: ['13', '14', '15', '16'], jawapan_betul: '15',
    penjelasan: 'Selepas nombor 14 adalah 15.', tahap_kesukaran: 1
  },
  {
    id: 't1_q2', tahun: 1, topik: 'Tambah & Tolak', subtopik: 'Tambah',
    jenis_soalan: 'grid_tap', soalan: 'Pilih nombor yang betul: 5 + 4 = ?',
    pilihan: ['8', '9', '10', '11'], jawapan_betul: '9',
    penjelasan: '5 tambah 4 ialah 9.', tahap_kesukaran: 1
  },
  {
    id: 't1_q3', tahun: 1, topik: 'Tambah & Tolak', subtopik: 'Tolak',
    jenis_soalan: 'grid_tap', soalan: 'Pilih nombor yang betul: 10 - 3 = ?',
    pilihan: ['6', '7', '8', '9'], jawapan_betul: '7',
    penjelasan: '10 tolak 3 ialah 7.', tahap_kesukaran: 1
  },
  {
    id: 't1_q4', tahun: 1, topik: 'Bentuk 2D/3D', subtopik: 'Bentuk 2D',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nama bentuk di bawah yang mempunyai 3 bucu?',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" fill="%2310b981" stroke="%23059669" stroke-width="4" stroke-linejoin="round"/></svg>',
    pilihan: ['Bulatan', 'Segi empat sama', 'Segi tiga', 'Segi empat tepat'], jawapan_betul: 'Segi tiga',
    penjelasan: 'Segi tiga mempunyai 3 sisi dan 3 bucu.', tahap_kesukaran: 1
  },
  {
    id: 't1_q5', tahun: 1, topik: 'Wang', subtopik: 'Mengenal Syiling',
    jenis_soalan: 'word_problem', soalan: 'Abu ada syiling 50 sen dan 20 sen. Berapakah jumlah wang Abu?',
    pilihan: ['30 sen', '50 sen', '70 sen', '90 sen'], jawapan_betul: '70 sen',
    penjelasan: '50 sen + 20 sen = 70 sen.', tahap_kesukaran: 2
  },
  {
    id: 't1_q6', tahun: 1, topik: 'Masa', subtopik: 'Hari dalam Seminggu',
    jenis_soalan: 'multiple_choice', soalan: 'Hari ini hari Isnin. Esok hari apa?',
    pilihan: ['Rabu', 'Ahad', 'Selasa', 'Khamis'], jawapan_betul: 'Selasa',
    penjelasan: 'Selepas hari Isnin ialah hari Selasa.', tahap_kesukaran: 1
  },
  {
    id: 't1_q7', tahun: 1, topik: 'Tambah & Tolak', subtopik: 'Bentuk Lazim',
    jenis_soalan: 'fill_blank', soalan: { top: 12, bottom: 6, operation: '+' },
    jawapan_betul: '18',
    penjelasan: '2+6=8. Bawa 1 di puluh. Jawapan 18.', tahap_kesukaran: 2
  },
  {
    id: 't1_q8', tahun: 1, topik: 'Nombor hingga 100', subtopik: 'Nilai Tempat',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nilai tempat bagi digit 2 dalam nombor 25?',
    pilihan: ['Sa', 'Puluh', 'Ratus', 'Ribu'], jawapan_betul: 'Puluh',
    penjelasan: 'Dalam nombor 25, 2 berada di tempat puluh dan 5 di tempat sa.', tahap_kesukaran: 1
  },
  {
    id: 't1_q9', tahun: 1, topik: 'Nombor hingga 100', subtopik: 'Susunan Nombor',
    jenis_soalan: 'multiple_choice', soalan: 'Susun nombor berikut mengikut tertib menaik: 12, 9, 15',
    pilihan: ['15, 12, 9', '9, 15, 12', '12, 9, 15', '9, 12, 15'], jawapan_betul: '9, 12, 15',
    penjelasan: 'Tertib menaik bermula dari nombor paling kecil kepada paling besar.', tahap_kesukaran: 2
  },
  {
    id: 't1_q10', tahun: 1, topik: 'Masa', subtopik: 'Muka Jam',
    jenis_soalan: 'multiple_choice', soalan: 'Jam menunjukkan pukul 2. Jarum panjang berada di nombor berapa?',
    pilihan: ['2', '6', '9', '12'], jawapan_betul: '12',
    penjelasan: 'Bagi waktu tepat (pukul 2), jarum panjang mesti berada di angka 12.', tahap_kesukaran: 2
  },
  {
    id: 't1_q11', tahun: 1, topik: 'Tambah & Tolak', subtopik: 'Tolak',
    jenis_soalan: 'grid_tap', soalan: '20 - 5 = ?',
    pilihan: ['12', '14', '15', '25'], jawapan_betul: '15',
    penjelasan: '20 tolak 5 tinggal 15.', tahap_kesukaran: 1
  },
  {
    id: 't1_q12', tahun: 1, topik: 'Wang', subtopik: 'Menambah Wang',
    jenis_soalan: 'word_problem', soalan: 'Siti membeli gula-gula. Dia bayar dengan 10 sen, 5 sen dan 5 sen. Berapakah jumlahnya?',
    pilihan: ['15 sen', '20 sen', '25 sen', '30 sen'], jawapan_betul: '20 sen',
    penjelasan: '10 + 5 + 5 = 20 sen.', tahap_kesukaran: 2
  },
  {
    id: 't1_q13', tahun: 1, topik: 'Ukuran', subtopik: 'Jisim',
    jenis_soalan: 'multiple_choice', soalan: 'Antara berikut, yang manakah paling berat?',
    pilihan: ['Gajah', 'Kucing', 'Arnab', 'Tikus'], jawapan_betul: 'Gajah',
    penjelasan: 'Gajah adalah haiwan yang paling besar dan berat antara pilihan ini.', tahap_kesukaran: 1
  },
  {
    id: 't1_q14', tahun: 1, topik: 'Bentuk 2D/3D', subtopik: 'Bentuk 3D',
    jenis_soalan: 'multiple_choice', soalan: 'Berapakah bucu pada sebuah kubus seperti di bawah?',
    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="40" width="40" height="40" fill="%2393c5fd" stroke="%232563eb" stroke-width="4" stroke-linejoin="round"/><polygon points="20,40 40,20 80,20 60,40" fill="%23bfdbfe" stroke="%232563eb" stroke-width="4" stroke-linejoin="round"/><polygon points="60,40 80,20 80,60 60,80" fill="%2360a5fa" stroke="%232563eb" stroke-width="4" stroke-linejoin="round"/></svg>',
    pilihan: ['4', '6', '8', '12'], jawapan_betul: '8',
    penjelasan: 'Sebuah kubus mempunyai 8 bucu, 12 tepi dan 6 permukaan rata.', tahap_kesukaran: 3
  },
  {
    id: 't1_q15', tahun: 1, topik: 'Tambah & Tolak', subtopik: 'Bentuk Lazim',
    jenis_soalan: 'fill_blank', soalan: { top: 15, bottom: 4, operation: '+' },
    jawapan_betul: '19',
    penjelasan: '5+4=9. Bawa 1. Jawapan 19.', tahap_kesukaran: 2
  },

  // TAHUN 2
  {
    id: 't2_q1', tahun: 2, topik: 'Nombor hingga 1000', subtopik: 'Nilai Nombor',
    jenis_soalan: 'multiple_choice', soalan: 'Tiga ratus lima puluh lapan ditulis dalam angka ialah...',
    pilihan: ['358', '385', '538', '3508'], jawapan_betul: '358',
    penjelasan: 'Tiga ratus (300) lima puluh (50) lapan (8) = 358.', tahap_kesukaran: 1
  },
  {
    id: 't2_q2', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Tambah',
    jenis_soalan: 'fill_blank', soalan: { top: 24, bottom: 15, operation: '+' },
    jawapan_betul: '39',
    penjelasan: '4+5=9, 2+1=3. Jawapannya 39.', tahap_kesukaran: 2
  },
  {
    id: 't2_q3', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Tolak',
    jenis_soalan: 'grid_tap', soalan: '50 - 21 = ?',
    pilihan: ['29', '31', '39', '19'], jawapan_betul: '29',
    penjelasan: '0 pinjam 1 jadi 10. 10-1=9. 4-2=2. Jawapan 29.', tahap_kesukaran: 2
  },
  {
    id: 't2_q4', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Darab',
    jenis_soalan: 'grid_tap', soalan: '4 x 5 = ?',
    pilihan: ['9', '15', '20', '25'], jawapan_betul: '20',
    penjelasan: '4 kumpulan 5 ialah 20.', tahap_kesukaran: 1
  },
  {
    id: 't2_q5', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Bahagi',
    jenis_soalan: 'multiple_choice', soalan: '12 dibahagikan dengan 3 ialah...',
    pilihan: ['3', '4', '5', '6'], jawapan_betul: '4',
    penjelasan: '12 ÷ 3 = 4.', tahap_kesukaran: 1
  },
  {
    id: 't2_q6', tahun: 2, topik: 'Pecahan', subtopik: 'Nilai Pecahan',
    jenis_soalan: 'multiple_choice', soalan: 'Tiga pertiga sama dengan...',
    pilihan: ['0', '1', '2', '3'], jawapan_betul: '1',
    penjelasan: 'Pecahan yang pengangka dan penyebutnya sama nilainya ialah 1 keseluruhan.', tahap_kesukaran: 2
  },
  {
    id: 't2_q7', tahun: 2, topik: 'Nombor hingga 1000', subtopik: 'Nilai Tempat',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nilai tempat bagi angka 4 dalam 642?',
    pilihan: ['Sa', 'Puluh', 'Ratus', 'Ribu'], jawapan_betul: 'Puluh',
    penjelasan: 'Digit 4 berada di nilai tempat Puluh.', tahap_kesukaran: 1
  },
  {
    id: 't2_q8', tahun: 2, topik: 'Wang', subtopik: 'Tambah Wang',
    jenis_soalan: 'word_problem', soalan: 'Ahmad ada RM10. Ayah beri lagi RM5. Berapakah wangnya sekarang?',
    pilihan: ['RM5', 'RM10', 'RM15', 'RM20'], jawapan_betul: 'RM15',
    penjelasan: 'RM10 + RM5 = RM15.', tahap_kesukaran: 1
  },
  {
    id: 't2_q9', tahun: 2, topik: 'Masa', subtopik: 'Perkaitan Masa',
    jenis_soalan: 'multiple_choice', soalan: 'Satu jam ada berapa minit?',
    pilihan: ['24 minit', '30 minit', '60 minit', '100 minit'], jawapan_betul: '60 minit',
    penjelasan: '1 jam sama dengan 60 minit.', tahap_kesukaran: 1
  },
  {
    id: 't2_q10', tahun: 2, topik: 'Ukuran', subtopik: 'Panjang',
    jenis_soalan: 'multiple_choice', soalan: '1 meter sama dengan berapa sentimeter?',
    pilihan: ['10 cm', '50 cm', '100 cm', '1000 cm'], jawapan_betul: '100 cm',
    penjelasan: '1 meter (m) bersamaan dengan 100 sentimeter (cm).', tahap_kesukaran: 2
  },
  {
    id: 't2_q11', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Bahagi',
    jenis_soalan: 'grid_tap', soalan: '30 ÷ 5 = ?',
    pilihan: ['5', '6', '7', '8'], jawapan_betul: '6',
    penjelasan: '30 bahagi 5 ialah 6.', tahap_kesukaran: 2
  },
  {
    id: 't2_q12', tahun: 2, topik: 'Tambah, Tolak, Darab, Bahagi', subtopik: 'Darab',
    jenis_soalan: 'grid_tap', soalan: '8 x 2 = ?',
    pilihan: ['10', '14', '16', '18'], jawapan_betul: '16',
    penjelasan: '8 darab 2 ialah 16.', tahap_kesukaran: 1
  },
  {
    id: 't2_q13', tahun: 2, topik: 'Pecahan', subtopik: 'Menamakan Pecahan',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nama lain bagi pecahan 2/5?',
    pilihan: ['Dua perlima', 'Lima perdua', 'Setengah', 'Suku'], jawapan_betul: 'Dua perlima',
    penjelasan: '2 di atas (pengangka) disebut dua, per 5 di bawah (penyebut) disebut perlima.', tahap_kesukaran: 1
  },
  {
    id: 't2_q14', tahun: 2, topik: 'Wang', subtopik: 'Tolak Wang',
    jenis_soalan: 'word_problem', soalan: 'Ibu ada RM50. Ibu beli barang harga RM20. Berapakah baki wang ibu?',
    pilihan: ['RM20', 'RM30', 'RM40', 'RM70'], jawapan_betul: 'RM30',
    penjelasan: 'RM50 tolak RM20 baki RM30.', tahap_kesukaran: 2
  },
  {
    id: 't2_q15', tahun: 2, topik: 'Masa', subtopik: 'Suku Jam',
    jenis_soalan: 'multiple_choice', soalan: 'Suku jam bersamaan dengan berapa minit?',
    pilihan: ['10 minit', '15 minit', '20 minit', '30 minit'], jawapan_betul: '15 minit',
    penjelasan: '1 jam = 60 minit. Suku jam = 60 minit bahagi 4 = 15 minit.', tahap_kesukaran: 3
  },

  // TAHUN 3
  {
    id: 't3_q1', tahun: 3, topik: 'Nombor hingga 10 000', subtopik: 'Nilai Nombor',
    jenis_soalan: 'multiple_choice', soalan: 'Angka bagi "Empat ribu dua ratus lima" ialah...',
    pilihan: ['425', '4025', '4205', '4250'], jawapan_betul: '4205',
    penjelasan: 'Empat ribu (4000) dua ratus (200) lima (5) = 4205.', tahap_kesukaran: 1
  },
  {
    id: 't3_q2', tahun: 3, topik: 'Empat Operasi', subtopik: 'Tambah',
    jenis_soalan: 'fill_blank', soalan: { top: 3450, bottom: 1220, operation: '+' },
    jawapan_betul: '4670',
    penjelasan: '3450 + 1220 = 4670.', tahap_kesukaran: 2
  },
  {
    id: 't3_q3', tahun: 3, topik: 'Empat Operasi', subtopik: 'Tolak',
    jenis_soalan: 'fill_blank', soalan: { top: 5000, bottom: 1500, operation: '-' },
    jawapan_betul: '3500',
    penjelasan: '5000 - 1500 = 3500.', tahap_kesukaran: 2
  },
  {
    id: 't3_q4', tahun: 3, topik: 'Empat Operasi', subtopik: 'Darab',
    jenis_soalan: 'multiple_choice', soalan: '12 x 4 = ?',
    pilihan: ['36', '42', '48', '52'], jawapan_betul: '48',
    penjelasan: '12 darab 4 ialah 48.', tahap_kesukaran: 2
  },
  {
    id: 't3_q5', tahun: 3, topik: 'Empat Operasi', subtopik: 'Bahagi',
    jenis_soalan: 'grid_tap', soalan: '45 ÷ 5 = ?',
    pilihan: ['7', '8', '9', '10'], jawapan_betul: '9',
    penjelasan: 'Sifir 5: 9 x 5 = 45. Maka 45 bahagi 5 ialah 9.', tahap_kesukaran: 1
  },
  {
    id: 't3_q6', tahun: 3, topik: 'Pecahan', subtopik: 'Tambah Pecahan',
    jenis_soalan: 'multiple_choice', soalan: '1/4 + 2/4 = ?',
    pilihan: ['2/4', '3/4', '4/4', '3/8'], jawapan_betul: '3/4',
    penjelasan: 'Penyebut sama (4). Hanya tambah pengangka: 1+2 = 3. Jawapan: 3/4.', tahap_kesukaran: 2
  },
  {
    id: 't3_q7', tahun: 3, topik: 'Wang', subtopik: 'Tolak Wang',
    jenis_soalan: 'word_problem', soalan: 'RM 100 - RM 25.50 = ?',
    pilihan: ['RM 74.00', 'RM 74.50', 'RM 75.00', 'RM 75.50'], jawapan_betul: 'RM 74.50',
    penjelasan: 'RM 100.00 - RM 25.50 = RM 74.50.', tahap_kesukaran: 3
  },
  {
    id: 't3_q8', tahun: 3, topik: 'Masa', subtopik: 'Perkaitan Masa',
    jenis_soalan: 'multiple_choice', soalan: 'Tukar 3 minggu kepada hari.',
    pilihan: ['15 hari', '21 hari', '24 hari', '30 hari'], jawapan_betul: '21 hari',
    penjelasan: '1 minggu = 7 hari. 3 minggu = 3 x 7 = 21 hari.', tahap_kesukaran: 2
  },
  {
    id: 't3_q9', tahun: 3, topik: 'Ukuran', subtopik: 'Jisim',
    jenis_soalan: 'multiple_choice', soalan: '1 kilogram (kg) bersamaan dengan berapa gram (g)?',
    pilihan: ['10 g', '100 g', '1000 g', '10000 g'], jawapan_betul: '1000 g',
    penjelasan: '1 kg sentiasa sama dengan 1000 gram.', tahap_kesukaran: 1
  },
  {
    id: 't3_q10', tahun: 3, topik: 'Masa', subtopik: 'Tukar Unit',
    jenis_soalan: 'multiple_choice', soalan: 'Berapakah minit dalam 2 jam?',
    pilihan: ['60', '90', '120', '150'], jawapan_betul: '120',
    penjelasan: '1 jam = 60 minit. 2 jam = 120 minit.', tahap_kesukaran: 1
  },
  {
    id: 't3_q11', tahun: 3, topik: 'Pecahan', subtopik: 'Tukar ke Pecahan',
    jenis_soalan: 'multiple_choice', soalan: 'Tukarkan 0.4 kepada pecahan.',
    pilihan: ['1/4', '4/10', '4/100', '40/10'], jawapan_betul: '4/10',
    penjelasan: '0.4 mempunyai 1 tempat perpuluhan, jadi ia bernilai 4 per 10 (4/10).', tahap_kesukaran: 3
  },
  {
    id: 't3_q12', tahun: 3, topik: 'Perimeter', subtopik: 'Perimeter Asas',
    jenis_soalan: 'word_problem', soalan: 'Apakah perimeter bagi segi empat sama bersisi 5cm?',
    pilihan: ['10cm', '15cm', '20cm', '25cm'], jawapan_betul: '20cm',
    penjelasan: 'Segi empat sama ada 4 sisi sama panjang. Perimeter = 5 + 5 + 5 + 5 = 20cm.', tahap_kesukaran: 2
  },
  {
    id: 't3_q13', tahun: 3, topik: 'Wang', subtopik: 'Darab Wang',
    jenis_soalan: 'grid_tap', soalan: 'RM 120 x 2 = ?',
    pilihan: ['RM 140', 'RM 220', 'RM 240', 'RM 340'], jawapan_betul: 'RM 240',
    penjelasan: '120 darab 2 ialah 240.', tahap_kesukaran: 2
  },
  {
    id: 't3_q14', tahun: 3, topik: 'Ukuran', subtopik: 'Isipadu',
    jenis_soalan: 'multiple_choice', soalan: '3000 ml sama dengan berapa liter?',
    pilihan: ['3 liter', '30 liter', '300 liter', '3000 liter'], jawapan_betul: '3 liter',
    penjelasan: '1000 ml = 1 liter. Maka 3000 ml = 3 liter.', tahap_kesukaran: 2
  },
  {
    id: 't3_q15', tahun: 3, topik: 'Ruang', subtopik: 'Poligon',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nama poligon yang mempunyai 5 sisi lurus?',
    pilihan: ['Segi tiga', 'Segi empat', 'Pentagon', 'Heksagon'], jawapan_betul: 'Pentagon',
    penjelasan: 'Pentagon mempunyai 5 sisi. Heksagon 6 sisi.', tahap_kesukaran: 2
  },

  // TAHUN 4
  {
    id: 't4_q1', tahun: 4, topik: 'Nombor hingga 100 000', subtopik: 'Bundar Nombor',
    jenis_soalan: 'multiple_choice', soalan: 'Bundarkan 45 678 kepada ribu terdekat.',
    pilihan: ['45 000', '45 600', '46 000', '50 000'], jawapan_betul: '46 000',
    penjelasan: 'Nilai ratus ialah 6 (lebih 5), jadi tambah 1 pada ribu. Jawapan 46 000.', tahap_kesukaran: 2
  },
  {
    id: 't4_q2', tahun: 4, topik: 'Empat Operasi', subtopik: 'Tambah',
    jenis_soalan: 'fill_blank', soalan: { top: 23456, bottom: 12300, operation: '+' },
    jawapan_betul: '35756',
    penjelasan: 'Hasil tambah ialah 35756.', tahap_kesukaran: 2
  },
  {
    id: 't4_q3', tahun: 4, topik: 'Empat Operasi', subtopik: 'Tolak',
    jenis_soalan: 'fill_blank', soalan: { top: 50000, bottom: 14500, operation: '-' },
    jawapan_betul: '35500',
    penjelasan: '50 000 - 14 500 = 35 500.', tahap_kesukaran: 3
  },
  {
    id: 't4_q4', tahun: 4, topik: 'Empat Operasi', subtopik: 'Darab',
    jenis_soalan: 'grid_tap', soalan: '234 x 15 = ?',
    pilihan: ['3500', '3510', '3610', '4510'], jawapan_betul: '3510',
    penjelasan: '234 x 10 = 2340. 234 x 5 = 1170. 2340 + 1170 = 3510.', tahap_kesukaran: 3
  },
  {
    id: 't4_q5', tahun: 4, topik: 'Empat Operasi', subtopik: 'Bahagi',
    jenis_soalan: 'multiple_choice', soalan: '1000 ÷ 8 = ?',
    pilihan: ['100', '125', '150', '250'], jawapan_betul: '125',
    penjelasan: '1000 dibahagikan kepada 8 bahagian sama dengan 125 setiap satu.', tahap_kesukaran: 3
  },
  {
    id: 't4_q6', tahun: 4, topik: 'Pecahan & Perpuluhan', subtopik: 'Tambah Pecahan',
    jenis_soalan: 'multiple_choice', soalan: '1/2 + 1/4 = ?',
    pilihan: ['2/6', '3/4', '2/4', '1/6'], jawapan_betul: '3/4',
    penjelasan: 'Tukar 1/2 kepada 2/4. Kemudian 2/4 + 1/4 = 3/4.', tahap_kesukaran: 2
  },
  {
    id: 't4_q7', tahun: 4, topik: 'Pecahan & Perpuluhan', subtopik: 'Tambah Perpuluhan',
    jenis_soalan: 'word_problem', soalan: '2.45 + 1.3 = ?',
    pilihan: ['2.58', '3.48', '3.75', '3.58'], jawapan_betul: '3.75',
    penjelasan: 'Susun titik perpuluhan dengan betul. 2.45 + 1.30 = 3.75.', tahap_kesukaran: 2
  },
  {
    id: 't4_q8', tahun: 4, topik: 'Pecahan & Perpuluhan', subtopik: 'Tukar Peratus',
    jenis_soalan: 'multiple_choice', soalan: 'Tukarkan 3/4 kepada peratus.',
    pilihan: ['25%', '50%', '75%', '100%'], jawapan_betul: '75%',
    penjelasan: '3/4 x 100% = 75%.', tahap_kesukaran: 2
  },
  {
    id: 't4_q9', tahun: 4, topik: 'Wang', subtopik: 'Darab Wang',
    jenis_soalan: 'grid_tap', soalan: 'RM 45.60 x 10 = ?',
    pilihan: ['RM 45.60', 'RM 456.00', 'RM 4560.00', 'RM 4.56'], jawapan_betul: 'RM 456.00',
    penjelasan: 'Darab dengan 10, gerakkan titik perpuluhan ke kanan 1 tempat.', tahap_kesukaran: 1
  },
  {
    id: 't4_q10', tahun: 4, topik: 'Masa', subtopik: 'Perkaitan Masa',
    jenis_soalan: 'multiple_choice', soalan: '2 hari 4 jam sama dengan berapa jam?',
    pilihan: ['28 jam', '48 jam', '52 jam', '60 jam'], jawapan_betul: '52 jam',
    penjelasan: '1 hari = 24 jam. 2 hari = 48 jam. 48 + 4 = 52 jam.', tahap_kesukaran: 2
  },
  {
    id: 't4_q11', tahun: 4, topik: 'Ukuran', subtopik: 'Panjang',
    jenis_soalan: 'multiple_choice', soalan: '1.5 kilometer sama dengan berapa meter?',
    pilihan: ['15 m', '150 m', '1500 m', '15000 m'], jawapan_betul: '1500 m',
    penjelasan: '1 km = 1000 m. 1.5 x 1000 = 1500 meter.', tahap_kesukaran: 2
  },
  {
    id: 't4_q12', tahun: 4, topik: 'Ruang', subtopik: 'Luas',
    jenis_soalan: 'word_problem', soalan: 'Kira luas segi empat tepat berukuran panjang 6cm dan lebar 4cm.',
    pilihan: ['10 cm persegi', '20 cm persegi', '24 cm persegi', '30 cm persegi'], jawapan_betul: '24 cm persegi',
    penjelasan: 'Luas = Panjang x Lebar = 6 x 4 = 24 cm persegi.', tahap_kesukaran: 2
  },
  {
    id: 't4_q13', tahun: 4, topik: 'Ruang', subtopik: 'Sudut',
    jenis_soalan: 'multiple_choice', soalan: 'Berapakah nilai darjah bagi satu sudut tegak?',
    pilihan: ['45 darjah', '60 darjah', '90 darjah', '180 darjah'], jawapan_betul: '90 darjah',
    penjelasan: 'Sudut tegak (right angle) tepat 90 darjah.', tahap_kesukaran: 1
  },
  {
    id: 't4_q14', tahun: 4, topik: 'Ruang', subtopik: 'Isipadu',
    jenis_soalan: 'word_problem', soalan: 'Cari isipadu kubus bersisi 3cm.',
    pilihan: ['9 cm padu', '12 cm padu', '18 cm padu', '27 cm padu'], jawapan_betul: '27 cm padu',
    penjelasan: 'Isipadu kubus = sisi x sisi x sisi = 3 x 3 x 3 = 27 cm padu.', tahap_kesukaran: 3
  },
  {
    id: 't4_q15', tahun: 4, topik: 'Koordinat', subtopik: 'Asalan',
    jenis_soalan: 'multiple_choice', soalan: 'Paksi X dan Paksi Y bersilang pada koordinat (0,0). Titik ini dipanggil...',
    pilihan: ['Pusat', 'Asalan', 'Sifar', 'Pangkal'], jawapan_betul: 'Asalan',
    penjelasan: 'Titik (0,0) di mana paksi x dan y bertemu dipanggil asalan (origin).', tahap_kesukaran: 2
  },

  // TAHUN 5
  {
    id: 't5_q1', tahun: 5, topik: 'Nombor hingga 1 000 000', subtopik: 'Nombor Perdana',
    jenis_soalan: 'multiple_choice', soalan: 'Antara berikut, yang manakah senarai nombor perdana?',
    pilihan: ['2, 4, 6, 8', '11, 13, 17, 19', '9, 15, 21, 25', '1, 2, 3, 4'], jawapan_betul: '11, 13, 17, 19',
    penjelasan: 'Nombor perdana hanya boleh dibahagi dengan 1 dan dirinya sendiri.', tahap_kesukaran: 3
  },
  {
    id: 't5_q2', tahun: 5, topik: 'Empat Operasi', subtopik: 'Tambah',
    jenis_soalan: 'fill_blank', soalan: { top: 124000, bottom: 350000, operation: '+' },
    jawapan_betul: '474000',
    penjelasan: '124000 + 350000 = 474000', tahap_kesukaran: 2
  },
  {
    id: 't5_q3', tahun: 5, topik: 'Empat Operasi', subtopik: 'Tolak',
    jenis_soalan: 'word_problem', soalan: 'Tolak 250 ribu daripada 1 juta.',
    pilihan: ['750 000', '850 000', '950 000', '250 000'], jawapan_betul: '750 000',
    penjelasan: '1 000 000 - 250 000 = 750 000.', tahap_kesukaran: 2
  },
  {
    id: 't5_q4', tahun: 5, topik: 'Empat Operasi', subtopik: 'Darab',
    jenis_soalan: 'grid_tap', soalan: '450 x 20 = ?',
    pilihan: ['900', '4500', '9000', '90000'], jawapan_betul: '9000',
    penjelasan: '45 x 2 = 90. Tambah 2 sifar = 9000.', tahap_kesukaran: 2
  },
  {
    id: 't5_q5', tahun: 5, topik: 'Empat Operasi', subtopik: 'Bahagi',
    jenis_soalan: 'multiple_choice', soalan: '240 000 ÷ 60 = ?',
    pilihan: ['40', '400', '4000', '40000'], jawapan_betul: '4000',
    penjelasan: 'Buang 1 sifar di kiri dan kanan (24000 ÷ 6). 24 ÷ 6 = 4. Tambah 3 sifar = 4000.', tahap_kesukaran: 3
  },
  {
    id: 't5_q6', tahun: 5, topik: 'Pecahan, Perpuluhan, Peratus', subtopik: 'Pecahan Kuantiti',
    jenis_soalan: 'word_problem', soalan: 'Berapakah 2/5 daripada 100?',
    pilihan: ['20', '40', '60', '80'], jawapan_betul: '40',
    penjelasan: '100 ÷ 5 = 20. Kemudian 20 x 2 = 40.', tahap_kesukaran: 3
  },
  {
    id: 't5_q7', tahun: 5, topik: 'Pecahan, Perpuluhan, Peratus', subtopik: 'Darab Perpuluhan',
    jenis_soalan: 'multiple_choice', soalan: '4.56 x 100 = ?',
    pilihan: ['4.56', '45.6', '456', '4560'], jawapan_betul: '456',
    penjelasan: 'Darab 100 bermaksud alih titik perpuluhan 2 tempat ke kanan.', tahap_kesukaran: 1
  },
  {
    id: 't5_q8', tahun: 5, topik: 'Pecahan, Perpuluhan, Peratus', subtopik: 'Kira Peratus',
    jenis_soalan: 'word_problem', soalan: 'Kira 20% daripada RM 200.',
    pilihan: ['RM 10', 'RM 20', 'RM 40', 'RM 80'], jawapan_betul: 'RM 40',
    penjelasan: '20/100 x 200 = 40.', tahap_kesukaran: 2
  },
  {
    id: 't5_q9', tahun: 5, topik: 'Masa', subtopik: 'Tukar Unit Dekad',
    jenis_soalan: 'multiple_choice', soalan: 'Berapakah dekad dalam tempoh 50 tahun?',
    pilihan: ['5', '10', '50', '500'], jawapan_betul: '5',
    penjelasan: '1 dekad sama dengan 10 tahun. 50 tahun bersamaan 5 dekad.', tahap_kesukaran: 1
  },
  {
    id: 't5_q10', tahun: 5, topik: 'Ukuran', subtopik: 'Jisim',
    jenis_soalan: 'word_problem', soalan: '3.5 kg + 400 g sama dengan berapa gram?',
    pilihan: ['390 g', '3900 g', '3540 g', '7500 g'], jawapan_betul: '3900 g',
    penjelasan: '3.5 kg = 3500 g. Tambah 400 g menjadi 3900 g.', tahap_kesukaran: 2
  },
  {
    id: 't5_q11', tahun: 5, topik: 'Ruang', subtopik: 'Luas Segi Tiga',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah luas segi tiga bersudut tegak yang mempunyai tapak 8cm dan tinggi 5cm?',
    pilihan: ['13 cm persegi', '20 cm persegi', '40 cm persegi', '80 cm persegi'], jawapan_betul: '20 cm persegi',
    penjelasan: 'Luas segi tiga = (Tapak x Tinggi) ÷ 2 = (8 x 5) ÷ 2 = 20.', tahap_kesukaran: 3
  },
  {
    id: 't5_q12', tahun: 5, topik: 'Data', subtopik: 'Min',
    jenis_soalan: 'word_problem', soalan: 'Cari min (purata) bagi data berikut: 2, 4, 6, 8, 10.',
    pilihan: ['4', '5', '6', '30'], jawapan_betul: '6',
    penjelasan: 'Min = (2+4+6+8+10) ÷ 5 nombor = 30 ÷ 5 = 6.', tahap_kesukaran: 2
  },
  {
    id: 't5_q13', tahun: 5, topik: 'Data', subtopik: 'Mod',
    jenis_soalan: 'multiple_choice', soalan: 'Nyatakan mod bagi set nombor ini: 3, 3, 4, 5, 3, 4',
    pilihan: ['3', '4', '5', 'Tiada'], jawapan_betul: '3',
    penjelasan: 'Mod adalah nilai yang paling kerap muncul. Angka 3 muncul tiga kali.', tahap_kesukaran: 1
  },
  {
    id: 't5_q14', tahun: 5, topik: 'Ruang', subtopik: 'Poligon',
    jenis_soalan: 'multiple_choice', soalan: 'Berapakah bilangan sisi bagi sebuah heksagon sekata?',
    pilihan: ['5', '6', '7', '8'], jawapan_betul: '6',
    penjelasan: 'Heksagon mempunyai 6 sisi (Hexa = 6).', tahap_kesukaran: 1
  },
  {
    id: 't5_q15', tahun: 5, topik: 'Masa', subtopik: 'Abad',
    jenis_soalan: 'multiple_choice', soalan: '1 abad bersamaan dengan berapa tahun?',
    pilihan: ['10 tahun', '50 tahun', '100 tahun', '1000 tahun'], jawapan_betul: '100 tahun',
    penjelasan: 'Satu abad adalah tempoh 100 tahun.', tahap_kesukaran: 1
  },

  // TAHUN 6
  {
    id: 't6_q1', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Pecahan Juta',
    jenis_soalan: 'multiple_choice', soalan: 'Tuliskan 1.25 juta dalam nombor bulat.',
    pilihan: ['12 500', '125 000', '1 250 000', '12 500 000'], jawapan_betul: '1 250 000',
    penjelasan: '1.25 x 1 000 000 = 1 250 000.', tahap_kesukaran: 2
  },
  {
    id: 't6_q2', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Pecahan Juta',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah nilai bagi 5/8 juta?',
    pilihan: ['500 000', '625 000', '750 000', '800 000'], jawapan_betul: '625 000',
    penjelasan: '1/8 juta = 125 000. Darab 5 = 625 000.', tahap_kesukaran: 3
  },
  {
    id: 't6_q3', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Bahagi Perpuluhan',
    jenis_soalan: 'grid_tap', soalan: '4.5 ÷ 0.5 = ?',
    pilihan: ['0.9', '4.0', '9.0', '90'], jawapan_betul: '9.0',
    penjelasan: 'Alih titik kedua-duanya 1 ke kanan: 45 ÷ 5 = 9.', tahap_kesukaran: 2
  },
  {
    id: 't6_q4', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Peratus Untung',
    jenis_soalan: 'word_problem', soalan: 'Harga kos kasut ialah RM50. Harga jual ialah RM60. Kira peratus keuntungan.',
    pilihan: ['10%', '15%', '20%', '25%'], jawapan_betul: '20%',
    penjelasan: 'Untung = RM10. Peratus untung = (10/50) x 100% = 20%.', tahap_kesukaran: 3
  },
  {
    id: 't6_q5', tahun: 6, topik: 'Nisbah', subtopik: 'Kadar',
    jenis_soalan: 'word_problem', soalan: 'Nisbah buku Ali kepada buku Abu ialah 3:5. Jika Ali ada 15 buku, berapakah buku Abu?',
    pilihan: ['15', '20', '25', '30'], jawapan_betul: '25',
    penjelasan: '3 bahagian = 15 buku (1 bahagian = 5). Maka 5 bahagian Abu = 5 x 5 = 25 buku.', tahap_kesukaran: 3
  },
  {
    id: 't6_q6', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Zon Masa',
    jenis_soalan: 'word_problem', soalan: 'Kuala Lumpur 8 jam lebih awal dari London. Jika Kuala Lumpur jam 10 malam, pukul berapakah di London?',
    pilihan: ['2 petang', '4 petang', '2 pagi esoknya', '6 pagi esoknya'], jawapan_betul: '2 petang',
    penjelasan: 'Tolak 8 jam dari 10 malam (22:00 - 8:00 = 14:00) iaitu 2 petang.', tahap_kesukaran: 3
  },
  {
    id: 't6_q7', tahun: 6, topik: 'Ruang (Pepejal)', subtopik: 'Isipadu Gabungan',
    jenis_soalan: 'word_problem', soalan: 'Dua buah kubus yang sama saiz dicantum. Jika panjang sisi satu kubus ialah 4cm, apakah jumlah isipadu bentuk itu?',
    pilihan: ['64 cm padu', '96 cm padu', '128 cm padu', '256 cm padu'], jawapan_betul: '128 cm padu',
    penjelasan: 'Isipadu 1 kubus = 4x4x4 = 64. Dua kubus = 64 x 2 = 128 cm padu.', tahap_kesukaran: 3
  },
  {
    id: 't6_q8', tahun: 6, topik: 'Pengendalian Data', subtopik: 'Kebolehjadian',
    jenis_soalan: 'multiple_choice', soalan: 'Apakah kebolehjadian mendapat "Angka" dalam balingan sekeping syiling yang adil?',
    pilihan: ['Pasti', 'Mustahil', 'Sama kemungkinan', 'Besar kemungkinan'], jawapan_betul: 'Sama kemungkinan',
    penjelasan: 'Syiling ada 2 permukaan, peluang Bunga atau Angka adalah sama rata (50-50).', tahap_kesukaran: 1
  },
  {
    id: 't6_q9', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Jarak & Skala',
    jenis_soalan: 'word_problem', soalan: 'Jarak sebenar 10km. Skala peta 1cm mewakili 1km. Berapakah jarak pada peta?',
    pilihan: ['1 cm', '10 cm', '100 cm', '1000 cm'], jawapan_betul: '10 cm',
    penjelasan: '1cm = 1km. Jadi 10km diwakili oleh 10 x 1cm = 10cm pada peta.', tahap_kesukaran: 2
  },
  {
    id: 't6_q10', tahun: 6, topik: 'Pengendalian Data', subtopik: 'Jumlah dari Min',
    jenis_soalan: 'word_problem', soalan: 'Min markah bagi 5 orang murid ialah 60. Berapakah jumlah markah mereka?',
    pilihan: ['12', '120', '300', '600'], jawapan_betul: '300',
    penjelasan: 'Jumlah = Min x Kuantiti = 60 x 5 = 300 markah.', tahap_kesukaran: 3
  },
  {
    id: 't6_q11', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Pecahan Jisim',
    jenis_soalan: 'word_problem', soalan: 'Berapakah 3/4 daripada 1.2 kg dalam unit gram?',
    pilihan: ['300g', '750g', '900g', '1200g'], jawapan_betul: '900g',
    penjelasan: '1.2 kg = 1200g. 1200 ÷ 4 = 300. 300 x 3 = 900g.', tahap_kesukaran: 3
  },
  {
    id: 't6_q12', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Isipadu',
    jenis_soalan: 'fill_blank', soalan: { top: 1.5, bottom: 0.5, operation: '+' },
    jawapan_betul: '2.0',
    penjelasan: '1.5 liter tambah 500 ml (0.5 liter) sama dengan 2.0 liter.', tahap_kesukaran: 2
  },
  {
    id: 't6_q13', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Tempoh Masa',
    jenis_soalan: 'multiple_choice', soalan: 'Bas bertolak jam 0830 dan tiba jam 1115. Kira tempoh masa perjalanan.',
    pilihan: ['2 jam 15 minit', '2 jam 45 minit', '3 jam 15 minit', '3 jam 45 minit'], jawapan_betul: '2 jam 45 minit',
    penjelasan: 'Dari 0830 ke 1030 (2 jam). Dari 1030 ke 1100 (30m). Dari 1100 ke 1115 (15m). Jumlah = 2j 45m.', tahap_kesukaran: 3
  },
  {
    id: 't6_q14', tahun: 6, topik: 'Pengendalian Data', subtopik: 'Median',
    jenis_soalan: 'multiple_choice', soalan: 'Nyatakan median bagi set nombor ini: 1, 3, 5, 7, 9',
    pilihan: ['3', '5', '7', 'Tiada'], jawapan_betul: '5',
    penjelasan: 'Median ialah nilai di tengah-tengah selepas susunan menaik. Nombor ke-3 ialah 5.', tahap_kesukaran: 2
  },
  {
    id: 't6_q15', tahun: 6, topik: 'Semua Topik Asas', subtopik: 'Diskaun',
    jenis_soalan: 'word_problem', soalan: 'Diskaun 10% diberikan untuk baju berharga RM80. Apakah harga baharunya?',
    pilihan: ['RM8', 'RM70', 'RM72', 'RM88'], jawapan_betul: 'RM72',
    penjelasan: '10% daripada RM80 ialah RM8. RM80 - RM8 = RM72 harga baharu.', tahap_kesukaran: 2
  }
];

export const TOPICS_BY_YEAR: Record<number, string[]> = {
  1: ['Nombor hingga 100', 'Tambah & Tolak', 'Bentuk 2D/3D', 'Wang', 'Masa', 'Ukuran'],
  2: ['Nombor hingga 1000', 'Tambah, Tolak, Darab, Bahagi', 'Pecahan', 'Wang', 'Masa', 'Ukuran'],
  3: ['Nombor hingga 10 000', 'Empat Operasi', 'Pecahan', 'Wang', 'Masa', 'Ukuran', 'Ruang', 'Perimeter'],
  4: ['Nombor hingga 100 000', 'Empat Operasi', 'Pecahan & Perpuluhan', 'Wang', 'Masa', 'Ukuran', 'Ruang', 'Koordinat'],
  5: ['Nombor hingga 1 000 000', 'Empat Operasi', 'Pecahan, Perpuluhan, Peratus', 'Wang', 'Masa', 'Ukuran', 'Ruang', 'Data'],
  6: ['Semua Topik Asas', 'Nisbah', 'Pengendalian Data', 'Ruang (Pepejal)'],
};

// --- PROCEDURAL GENERATION ENGINE --- //
// Untuk melengkapkan 15 soalan bagi setiap topik secara dinamik

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOptions(correct: number | string, count: number = 4): string[] {
    const opts = new Set<string>();
    opts.add(correct.toString());
    
    // if it's a string that contains numbers (like RM 50), try to extract
    const numMatch = correct.toString().match(/\d+/);
    const baseNum = numMatch ? parseInt(numMatch[0]) : 0;
    const prefix = correct.toString().replace(/\d.*/, '');
    const suffix = correct.toString().replace(/.*\d/, '');

    while (opts.size < count) {
        let variance = rnd(1, 15);
        let sign = rnd(0, 1) === 0 ? 1 : -1;
        let fakeNum = baseNum + (variance * sign);
        if (fakeNum < 0 && baseNum >= 0) fakeNum = baseNum + variance;
        
        if (numMatch) {
            opts.add(`${prefix}${fakeNum}${suffix}`);
        } else {
            // fallback string opts
            opts.add(correct.toString() + " " + rnd(1,9));
        }
    }
    return Array.from(opts).sort(() => 0.5 - Math.random());
}

function generateFractionSvg(numerator: number, denominator: number): string {
    let slices = '';
    const cx = 50, cy = 50, r = 40;
    for (let i = 0; i < denominator; i++) {
        const startAngle = (i * 360 / denominator) - 90;
        const endAngle = ((i + 1) * 360 / denominator) - 90;
        const x1 = cx + r * Math.cos(startAngle * Math.PI / 180);
        const y1 = cy + r * Math.sin(startAngle * Math.PI / 180);
        const x2 = cx + r * Math.cos(endAngle * Math.PI / 180);
        const y2 = cy + r * Math.sin(endAngle * Math.PI / 180);
        const largeArc = (360 / denominator) > 180 ? 1 : 0;
        const fill = i < numerator ? '%233b82f6' : '%23e5e7eb';
        
        if (denominator === 1) {
             slices += `<circle cx="50" cy="50" r="40" fill="${fill}" stroke="%231e3a8a" stroke-width="2"/>`;
        } else {
             slices += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z" fill="${fill}" stroke="%231e3a8a" stroke-width="2"/>`;
        }
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${slices}</svg>`;
}

function generatePolygonSvg(sides: number): string {
    const cx = 50, cy = 50, r = 40;
    let points = [];
    for(let i=0; i<sides; i++) {
        const angle = (i * 360 / sides) - 90;
        const x = cx + r * Math.cos(angle * Math.PI / 180);
        const y = cy + r * Math.sin(angle * Math.PI / 180);
        points.push(`${x},${y}`);
    }
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="${points.join(' ')}" fill="%2310b981" stroke="%23059669" stroke-width="4" stroke-linejoin="round"/></svg>`;
}

function generateClockSvg(jam: number, minit: number): string {
    const cx = 50, cy = 50, r = 40;
    const hAngle = (jam % 12 + minit / 60) * 30 - 90;
    const mAngle = minit * 6 - 90;
    
    const hx = cx + 20 * Math.cos(hAngle * Math.PI / 180);
    const hy = cy + 20 * Math.sin(hAngle * Math.PI / 180);
    const mx = cx + 30 * Math.cos(mAngle * Math.PI / 180);
    const my = cy + 30 * Math.sin(mAngle * Math.PI / 180);

    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23ffffff" stroke="%23333333" stroke-width="4"/><line x1="50" y1="50" x2="${hx}" y2="${hy}" stroke="%23333333" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="50" x2="${mx}" y2="${my}" stroke="%23ef4444" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="50" r="3" fill="%23333333"/></svg>`;
}

function generateDotsSvg(a: number, b: number, isAddition: boolean): string {
    if (a > 9 || b > 9) return ''; 
    const drawDots = (count: number, color: string, startX: number) => {
        let dots = '';
        for(let i=0; i<count; i++) {
            const x = startX + (i % 3) * 15;
            const y = 30 + Math.floor(i / 3) * 15;
            dots += `<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
        }
        return dots;
    }
    const colorA = '%23f87171'; // red
    const colorB = '%2360a5fa'; // blue
    
    if (isAddition) {
        return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${drawDots(a, colorA, 15)}<text x="50" y="50" font-family="sans-serif" font-size="20" text-anchor="middle" fill="%23333" font-weight="bold">+</text>${drawDots(b, colorB, 65)}</svg>`;
    } else {
        return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${drawDots(a, colorA, 30)}<text x="50" y="90" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="%23ef4444">Buang ${b}</text></svg>`;
    }
}

function generateMoneySvg(): string {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="%23fbbf24" stroke="%23d97706" stroke-width="4"/><circle cx="50" cy="50" r="28" fill="none" stroke="%23d97706" stroke-width="1" stroke-dasharray="2,2"/><text x="50" y="56" font-size="22" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="%23b45309">RM</text></svg>`;
}

function generateDynamicQuestion(year: number, topic: string, idStr: string): Question {
    let q: Partial<Question> = {
        id: idStr,
        tahun: year,
        topik: topic,
        subtopik: 'Latihan Ulangan',
        tahap_kesukaran: rnd(1, 3) as 1 | 2 | 3
    };

    let maxNum = Math.pow(10, year + 1);
    let a, b, ans;
    const topicLower = topic.toLowerCase();

    if (topicLower.includes('tambah') || (topicLower.includes('operasi') && rnd(1,4) === 1)) {
        a = rnd(1, maxNum / 2);
        b = rnd(1, maxNum / 2);
        ans = a + b;
        q.jenis_soalan = 'grid_tap';
        q.soalan = `${a} + ${b} = ?`;
        q.jawapan_betul = ans.toString();
        q.pilihan = generateOptions(ans);
        q.penjelasan = `${a} ditambah dengan ${b} ialah ${ans}.`;
        if (a <= 9 && b <= 9) q.image = generateDotsSvg(a, b, true);
    } 
    else if (topicLower.includes('tolak') || (topicLower.includes('operasi') && rnd(1,3) === 1)) {
        a = rnd(maxNum / 4, maxNum);
        b = rnd(1, a);
        ans = a - b;
        q.jenis_soalan = 'grid_tap';
        q.soalan = `${a} - ${b} = ?`;
        q.jawapan_betul = ans.toString();
        q.pilihan = generateOptions(ans);
        q.penjelasan = `${a} ditolak dengan ${b} ialah ${ans}.`;
        if (a <= 9) q.image = generateDotsSvg(a, b, false);
    }
    else if (topicLower.includes('darab') || (topicLower.includes('operasi') && rnd(1,2) === 1)) {
        a = rnd(2, year * 4);
        b = rnd(2, 10);
        ans = a * b;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Berapakah hasil darab ${a} dan ${b}?`;
        q.jawapan_betul = ans.toString();
        q.pilihan = generateOptions(ans);
        q.penjelasan = `${a} x ${b} = ${ans}.`;
    }
    else if (topicLower.includes('bahagi') || topicLower.includes('operasi')) {
        b = rnd(2, year + 3);
        ans = rnd(2, 12);
        a = b * ans;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `${a} ÷ ${b} = ?`;
        q.jawapan_betul = ans.toString();
        q.pilihan = generateOptions(ans);
        q.penjelasan = `${a} dibahagi kepada ${b} kumpulan akan mendapat ${ans}.`;
    }
    else if (topicLower.includes('wang')) {
        a = rnd(1, 50 * year);
        b = rnd(1, 50 * year);
        ans = a + b;
        q.jenis_soalan = 'word_problem';
        q.soalan = `Siti ada RM ${a}. Bapanya memberi RM ${b} lagi. Berapakah jumlah wang Siti?`;
        q.jawapan_betul = `RM ${ans}`;
        q.pilihan = generateOptions(`RM ${ans}`);
        q.penjelasan = `RM ${a} + RM ${b} = RM ${ans}.`;
        q.image = generateMoneySvg();
    }
    else if (topicLower.includes('masa')) {
        let jam = rnd(2, 12);
        let minit = jam * 60;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `${jam} jam bersamaan dengan berapa minit?`;
        q.jawapan_betul = `${minit} minit`;
        q.pilihan = generateOptions(`${minit} minit`);
        q.penjelasan = `1 jam = 60 minit. Jadi, ${jam} x 60 = ${minit} minit.`;
        q.image = generateClockSvg(jam, 0);
    }
    else if (topicLower.includes('pecahan')) {
        let penyebut = rnd(3, 8);
        let pengangka = rnd(1, penyebut - 1);
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Berdasarkan rajah, apakah pecahan kawasan berlorek?`;
        q.jawapan_betul = `${pengangka}/${penyebut}`;
        q.pilihan = [`${pengangka}/${penyebut}`, `${penyebut}/${pengangka}`, `${pengangka+1}/${penyebut}`, `${pengangka}/${penyebut+1}`].sort(() => 0.5 - Math.random());
        q.penjelasan = `Terdapat ${pengangka} bahagian berlorek daripada ${penyebut} bahagian keseluruhan.`;
        q.image = generateFractionSvg(pengangka, penyebut);
    }
    else if (topicLower.includes('perpuluhan')) {
        a = rnd(1, 9);
        b = rnd(1, 9);
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Tukarkan pecahan ${a} dan ${b}/10 kepada nombor perpuluhan.`;
        q.jawapan_betul = `${a}.${b}`;
        q.pilihan = [`${a}.${b}`, `${a}.${b+1}`, `${a+1}.${b}`, `0.${a}${b}`].sort(() => 0.5 - Math.random());
        q.penjelasan = `${a} dan ${b}/10 ditulis sebagai ${a}.${b}.`;
    }
    else if (topicLower.includes('peratus')) {
        a = rnd(1, 9) * 10;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Berapakah nilai ${a}% dalam bentuk pecahan?`;
        q.jawapan_betul = `${a}/100`;
        q.pilihan = [`${a}/100`, `${a}/10`, `${a+10}/100`, `1/${a}`].sort(() => 0.5 - Math.random());
        q.penjelasan = `Peratus bermaksud per seratus. Jadi ${a}% ialah ${a}/100.`;
    }
    else if (topicLower.includes('nombor')) {
        a = rnd(100, maxNum);
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Apakah nombor selepas ${a}?`;
        q.jawapan_betul = (a+1).toString();
        q.pilihan = generateOptions(a+1);
        q.penjelasan = `Nombor selepas ${a} ialah ${a+1}.`;
    }
    else if (topicLower.includes('ukuran') || topicLower.includes('panjang') || topicLower.includes('jisim')) {
        a = rnd(2, 15);
        ans = a * 1000;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Tukarkan ${a} kg kepada gram (g).`;
        q.jawapan_betul = `${ans} g`;
        q.pilihan = generateOptions(`${ans} g`);
        q.penjelasan = `1 kg = 1000 g. Jadi ${a} kg = ${ans} g.`;
    }
    else if (topicLower.includes('bentuk') || topicLower.includes('ruang') || topicLower.includes('pepejal') || topicLower.includes('perimeter')) {
        a = rnd(3, 8);
        ans = a * 4;
        q.jenis_soalan = 'word_problem';
        q.soalan = `Sebuah poligon sekata di bawah mempunyai panjang sisi 4 cm. Berapakah perimeternya?`;
        q.jawapan_betul = `${a * 4} cm`;
        q.pilihan = generateOptions(`${a * 4} cm`);
        q.penjelasan = `Poligon ini ada ${a} sisi. Perimeter = ${a} x 4 = ${a * 4} cm.`;
        q.image = generatePolygonSvg(a);
    }
    else if (topicLower.includes('koordinat')) {
        a = rnd(1, 5);
        b = rnd(1, 5);
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Paksi-x ialah ${a} dan paksi-y ialah ${b}. Apakah koordinat titik tersebut?`;
        q.jawapan_betul = `(${a},${b})`;
        q.pilihan = [`(${a},${b})`, `(${b},${a})`, `(0,${a})`, `(${b},0)`].sort(() => 0.5 - Math.random());
        q.penjelasan = `Koordinat ditulis sebagai (x,y). Jadi koordinatnya ialah (${a},${b}).`;
    }
    else if (topicLower.includes('data') || topicLower.includes('nisbah')) {
        a = rnd(2, 5);
        b = rnd(6, 10);
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Dalam sebuah kelas, ada ${a} lelaki dan ${b} perempuan. Apakah nisbah lelaki kepada perempuan?`;
        q.jawapan_betul = `${a}:${b}`;
        q.pilihan = [`${a}:${b}`, `${b}:${a}`, `1:${a}`, `1:${b}`].sort(() => 0.5 - Math.random());
        q.penjelasan = `Nisbah lelaki (${a}) kepada perempuan (${b}) ditulis sebagai ${a}:${b}.`;
    }
    else {
        a = rnd(1, 10);
        b = rnd(1, 10);
        ans = a + b;
        q.jenis_soalan = 'multiple_choice';
        q.soalan = `Apakah hasil bagi ${a} + ${b}?`;
        q.jawapan_betul = ans.toString();
        q.pilihan = generateOptions(ans);
        q.penjelasan = `Hasilnya adalah ${ans}.`;
    }

    return q as Question;
}

export const QUESTIONS: Question[] = [...MANUAL_QUESTIONS];

let genId = 1000;
Object.entries(TOPICS_BY_YEAR).forEach(([yearStr, topics]) => {
  const year = parseInt(yearStr);
  topics.forEach(topic => {
    const existing = QUESTIONS.filter(q => q.tahun === year && q.topik === topic);
    const needed = 15 - existing.length;
    
    for (let i = 0; i < needed; i++) {
        QUESTIONS.push(generateDynamicQuestion(year, topic, `gen_${year}_${topic}_${genId++}`));
    }
  });
});
