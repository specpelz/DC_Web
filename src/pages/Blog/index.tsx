import MainLayout from "@layouts/MainLayout";
import { Button, Input, Pagination } from "antd";
import { IoCalendarOutline, IoSearch } from "react-icons/io5";
import { Typography } from "antd";
import { useEffect, useState } from "react";








interface BlogData {
  id: string;
  title: string;
  content: string;
  image: string;
  updatedAt:string
}


const blogs:BlogData[]=[

  {
    id: "0",
    title: "How to Start a Blog (I Got 200+ Million Visitors)",
    content: "I should be dead.I was born with a fatal disease called Spinal Muscular Atrophy (SMA). I’m in a wheelchair, and I can’t move anything but my face.But I’m not dead. On the contrary, I’ve traveled all over the world and become a multimillionaire. Over 200 million people have read my work.How is that possible?I write with a speech dictation software called Dragon NaturallySpeaking. I also have a mouse I operate with my lips.With this set up, I’ve been blogging for 15 years.To make money, I sell books and courses. I have over 60,000 customers.And I’m freakishly good at what I do.",
    image: "/blogImage.png",
    updatedAt:`25 June. 2024`
  }
]

for(let i=1; i < 30; i++ ){
  blogs.push(  {
    id: `${i}`,
    title: `Africa Internet Governance Forum Abuja ${i}`,
    content: "Identifying the Challenges of Digital Exclusion in Africa, innovations, recommendations and the Identifying the Challenges of Digital Exclusion in Africa, innovations, recommendations and the",
    image: "/blogImage.png",
    updatedAt:`${i} Sept. 2024`
  },)
}


const Blog = () => {

const [loadingImages, setLoadingImages]=useState<boolean>(true)

useEffect(() => {
  const timer = setTimeout(() => setLoadingImages(false), 2000);
  
  // Cleanup the timer when the component unmounts
  return () => clearTimeout(timer);
}, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [currentPage, setCurrentPage] = useState(1);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  // const [selectedBlog, setSelectedBlog] = useState<BlogData | null>(null);
 

  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const imagesPerPage = 9;

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );






  const { Title,Paragraph  } = Typography;
  return (
    <MainLayout>
      <div className="flex justify-center ">
        <div className="w-[90%] ">
          <h1 className="font-[700] text-[32px] text-[#2C2C2C]">Blog</h1>
          <p className="my-[16px] text-[#757575] text-[18px] font-[500] w-[50%] ">
            We simplify environmental incident data into clear infographics,
            fostering grassroots participation in environmental protection.
          </p>

          <div className="flex gap-x-[16px] items-center">
            <Input
              placeholder="Search for data... "
              prefix={<IoSearch size={17.5} />}
              className="h-[46px] w-[323px] bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button
              type="primary"
              // onClick={handleUploadClick}
              className="w-[200px] h-[48px] text-[16px] font-[400] bg-BrandPrimary"
            >
              <div className="text-[16px] font-[400]">Search</div>
            </Button>
          </div>

          {/* BLOGS POSTS>>>>>>>>>>>>>>>>>>>>>> */}










         



          {loadingImages === true ? (
        
        <div className="my-[40px] grid grid-cols-3 gap-[19px]">
            {Array.from({ length: imagesPerPage }).map((_, index) => (
              <div
                key={index}
                className="relative w-full h-[180px] flex flex-col gap-2"
              >
                {/* Delete icon skeleton */}
                <div className="absolute top-4 right-4 bg-gray-200 animate-pulse w-[26px] h-[26px] rounded-full"></div>

                {/* Image skeleton */}
                <div className="w-full h-[180px] bg-gray-200 animate-pulse rounded-[14px]"></div>
              </div>
            ))}
          </div>
      
      ) : currentBlogs.length > 0 ? (
    
        <div className="my-[40px] grid grid-cols-3 gap-[19px]">
            {currentBlogs.map((item) => (
               <div 
               key={item.id}
               className="w-[414px] cursor-pointer">
               <div className="w-full h-[214px] rounded-md mb-[16.5px]">
                 <img
                   src={item.image}
                   alt="uploaded image"
                   className="w-full h-[214px] rounded-[14px] object-cover"
                 />
               </div>
               <div className="flex items-center gap-x-[5px]">
                 <IoCalendarOutline size={17.5} color="#757575" />
                 <div className="text-[#757575] text-[12px]">{item.updatedAt}</div>
               </div>
               <Title
                 style={{
                   color:"#2C2C2C"
                 }}
                 ellipsis={{ rows: 1, expandable: false }}
                 level={4}
               >
                {item.title}
               </Title>
               <Paragraph
               style={{
                 color:"#757575"
               }}
               ellipsis={{ rows: 2, expandable: false }}
               >
         {item.content}
               </Paragraph>
               <div className="flex items-center gap-x-[15px]">
 <div className="font-[14px] text-[#1D48E7]">Read more</div><img src="/arrowRightUp.svg" alt="arrow right up"/>
 
               </div>
             </div>
            ))}
          </div>
      
      ) : (
       <p> NOTHING HERE FOR NOW</p>
      )}



    




<Pagination
        className="my-6 flex justify-end"
        current={currentPage}
        pageSize={imagesPerPage}
        total={blogs.length}
        onChange={onPageChange}
      />


















        </div>
      </div>
    </MainLayout>
  );
};
export default Blog;
