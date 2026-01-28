import BookDetail from "../../components/novels/NovelDetail";
import BasicLayout from "../../layout/BasicLayout";

const BookDetails = () => {
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Book Details</h1>
      <NovelDetail />
    </BasicLayout>
  );
};

export default BookDetails;
