import MainLayout from "@layouts/MainLayout";
import { Button, Input, Pagination } from "antd";
import { IoSearch } from "react-icons/io5";


import { useState } from "react";



import { useNavigate } from "react-router-dom";
import BlogCard from "@components/blogCard";
import Container from "@components/container";
import useBlog from "@hooks/useBlog";

interface BlogData {
  id: string;
  title: string;
  content: string;
  image: string;
  updatedAt: string;
}


const Blog = () => {


  const { blogDetails:blogs, loading } = useBlog();
  const navigate = useNavigate();


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

  const handleNavigate = (item: BlogData) => {
    navigate(`/blog-details/${item.id}`, { state: { item } });
  };




  // const { Title,Paragraph  } = Typography;
  return (
    <MainLayout>
      <Container>
        <div className="flex justify-center mt-[20vh] lg:mt-[25vh]">
          <div className="w-[100%] ">
            <h1 className="font-[700] text-[32px] text-[#2C2C2C]">Blog</h1>
            <p className="my-[16px] text-[#757575] text-[18px] font-[500] md:w-[50%] ">
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

            {loading === true ? (
              <div className="my-[40px] grid grid-cols-3 gap-[19px]">
                {Array.from({ length: imagesPerPage }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[214px] flex flex-col gap-2"
                  >
                    {/* Delete icon skeleton */}
                    <div className="absolute top-4 right-4 bg-gray-200 animate-pulse w-[26px] h-[26px] rounded-full"></div>

                    {/* Image skeleton */}
                    <div className="w-full h-[214px] bg-gray-200 animate-pulse rounded-[14px]"></div>
                  </div>
                ))}
              </div>
            ) :  currentBlogs && currentBlogs.length > 0 ? (
              <div className="my-[40px] grid grid-cols-1 gap-y-[30px] md:gap-[19px] md:grid-cols-2 xl:grid-cols-3">
                {currentBlogs.map((detail) => (
                  <BlogCard 
                  key={(detail as BlogData).id}
                  item={
                    {
                      ...detail,
                      content: detail.content.replace(/<[^>]*>/g, ""), // Strip HTML tags
                    } as BlogData
                  }
                  clickFN={() => handleNavigate(detail as BlogData)}
                  />
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
      </Container>
    </MainLayout>
  );
};
export default Blog;
