import CertificationItem from "./CertificationItem";
import CertificationPagination from "./CertificationPagination";
import { useCertificationPagination } from "./useCertificationPagination";
import { certifications } from "./CertificationData";
import type { CertificationType } from "./CertificationType";

const itemsPerPage: number = 6;

const CertificationsTab = () => {
  const { currentPage, totalPages, paginatedItems, handlePageChange } =
    useCertificationPagination(certifications, itemsPerPage);

  return (
    <div>
      <div className="my-journey-certification-container">
        {paginatedItems.map((certification: CertificationType, idx: number) => (
          <CertificationItem cert={certification} key={idx} />
        ))}
      </div>
      <CertificationPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CertificationsTab;
