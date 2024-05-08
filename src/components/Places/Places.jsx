import React from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/places/gambar1.jpeg";
import Img2 from "../../assets/places/gambar2.jpeg";
import Img3 from "../../assets/places/gambar3.jpeg";
import Img4 from "../../assets/places/gambar4.jpeg";
import Img5 from "../../assets/places/gambar5.jpeg";
import Img6 from "../../assets/places/gambar6.jpeg";
import Img7 from "../../assets/places/gambar7.webp";
import Img8 from "../../assets/places/gambar8.jpeg";
import Img9 from "../../assets/places/gambar9.webp";
import Img10 from "../../assets/places/gambar10.jpeg";
import Img11 from "../../assets/places/gambar11.jpeg";

const PlacesData = [
    {
        img: Img1,
        title: "Taman Nasional Baluran",
        location: "Area Hutan/Kebun, Sumberwaru, Banyuputih, Situbondo Regency, East Java",
        description:"Merupakan salah satu Taman Nasional di Indonesia yang terletak di wilayah Kecamatan Banyuputih,Kabupaten Situbondo, Provinsi Jawa Timur, Indonesia.",
        type:"Wisata Alam",
    },
    {
        img: Img2,
        title: "Air Terjun Tumpak Sewu",
        location: "perbatasan Malang-Lumajang, Jawa Timur tepatnya berada pada dua desa yaitu Desa Sidomulyo, Kecamatan Pronojiwo, Kabupaten Lumajang dan Desa Sidorenggo Kecamatan Ampel Gading Kabupaten Malang Provinsi Jawa Timur, Indonesia.",
        description:"sebuah air terjun berketinggian sekitar 120 meter.",
        type:"Wisata Alam",
    },
    {
        img: Img3,
        title: "Gunung Bromo",
        location: "Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan Kabupaten Malang. ",
        description:"Gunung Bromo adalah gunung berapi somma aktif dan bagian dari pegunungan Tengger, di Jawa Timur, Indonesia. Dengan ketinggian 2.329 meter, ini bukanlah puncak tertinggi dari pegunungan tersebut, tetapi yang paling aktif dan terkenal",
        type:"Wisata Alam",
    },
    {
        img: Img4,
        title: "Gunung Semeru",
        location: "Kabupaten Malang dan Kabupaten Lumajang, Jawa Timur, Indonesia",
        description:"Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, 3.676 meter dari permukaan laut (mdpl). Gunung ini terbentuk akibat subduksi Lempeng Indo-Australia kebawah Lempeng Eurasia. Gunung Semeru juga merupakan gunung berapi tertinggi ketiga di Indonesia.",
        type:"Wisata Alam",
    },
    {
        img: Img5,
        title: "kawah Ijen",
        location: "Bondowoso dan Banyuwangi tepatnya di wilayah Cagar Alam Taman Wisata Ijen Bondowoso Jawa Timur",
        description:"salah satu gunung aktif di Jawa Timur. Dengan ketinggian 2.443 mdpl dan kedalaman danau 200 m serta luas kawah mencapai 5.466 Hektar, Kawah Ijen diklaim sebagai salah satu Danau Kawah terbesar di dunia.",
        type:"Wisata Alam",
    },
    {
        img: Img6,
        title: "Pantai Sukamande",
        location: "Jl. Sukamade No.99, Dusun Sukamande, Sarongan, Pesanggaran, Kabupaten Banyuwangi, Jawa Timur 68488",
        description:"Pantai Sukamade merupakan salah satu obyek wisata favorit di TN Meru Betiri. Selain panorama pantai, taman nasional seluas 52.626 hektare tersebut juga menyimpan potensi flora dan fauna lainnya, seperti elang jawa, macan tutul, banteng, bunga padmosari atau rafflesia zollingeriana, dan sebagainya.",
        type:"Wisata Alam",
    },
    {
        img: Img7,
        title: "Gili Lawak",
        location: "pulau ini terletak di Desa Kombang, Kecamatan Talango, Kabupaten Sumenep, Jawa Timur",
        description:"Gili labak dikenal memiliki biota laut yang beragam, Selain itu pulaunya dikelilingi oleh pasir putih bersih. Pengunjung akan disambut oleh taburan pasir putih, air laut yang jernih, serta parairan pinggir pantai yang tenang",
        type:"Wisata Alam",
    },
    {
        img: Img8,
        title: "Museum Angkut",
        location: "Jl. Terusan Sultan Agung No.2, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur 65314 68488",
        description:"Museum Angkut merupakan museum transportasi dan tempat wisata modern yang terletak di Kota Batu",
        type:"Tempat Wisata",
    },
    {
        img: Img9,
        title: "Jatim Park 1",
        location: "Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65315",
        description:"tempat rekreasi yang memiliki konsep taman bermain yang dipadukan dengan taman edukasi.",
        type:"Tempat Wisata",
    },
    {
        img: Img10,
        title: "Jatim Park 2",
        location: "Jl. Raya Oro-Oro Ombo No.9, Temas, Kec. Batu, Kota Batu, Jawa Timur 65315",
        description:"Taman hiburan dengan aktivitas edukasi seputar sejarah alam & biologi, termasuk kebun binatang.",
        type:"Tempat Wisata",
    },
    {
        img: Img11,
        title: "Jatim Park 3",
        location: "Jl. Ir. Soekarno No.144, Beji, Kec. Junrejo, Kota Batu, Jawa Timur 65236",
        description:"Taman hiburan populer dengan atraksi dinosaurus, museum lilin, konsesi & pameran teknologi.",
        type:"Tempat Wisata",
    },
]

const Places = () => {
    return(
        <div className="bg-gray/50 py-10">
            <div className="container">
                <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">Best Tourist Attraction to vist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        PlacesData.map((item,index) => (
                            <PlacesCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Places;