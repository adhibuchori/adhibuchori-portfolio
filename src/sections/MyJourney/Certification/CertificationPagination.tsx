import IconChevronRight from "../../../assets/icons/ic_chevron_right.svg?react";
import IconChevronLeft from "../../../assets/icons/ic_chevron_left.svg?react";

type CertificationPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const CertificationPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CertificationPaginationProps) => {
  const handlePrevClick = () => {
    const newPage = Math.max(currentPage - 1, 1);
    onPageChange(newPage);
  };

  const handleNextClick = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    onPageChange(newPage);
  };

  return (
    <div className="my-journey-certification-pagination-container">
      <button
        onClick={handlePrevClick}
        aria-disabled={currentPage === 1}
        className={`my-journey-certification-pagination-btn glass-effect ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
      >
        <IconChevronLeft className="my-journey-certification-pagination-icon" />
      </button>

      <span className="my-journey-certification-pagination-page">
        <span className="my-journey-certification-pagination-current">
          {String(currentPage).padStart(2, "0")}
        </span>
        <span className="my-journey-certification-pagination-of">of</span>
        <span className="my-journey-certification-pagination-total">
          {String(totalPages).padStart(2, "0")}
        </span>
      </span>

      <button
        onClick={handleNextClick}
        aria-disabled={currentPage === totalPages}
        className={`my-journey-certification-pagination-btn glass-effect ${
          currentPage === totalPages ? "is-disabled" : ""
        }`}
      >
        <IconChevronRight className="my-journey-certification-pagination-icon" />
      </button>
    </div>
  );
};

export default CertificationPagination;
