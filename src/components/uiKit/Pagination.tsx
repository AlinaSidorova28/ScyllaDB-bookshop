import { Pagination as BasePagination } from '@gravity-ui/uikit';
import React from 'react';

interface PaginationProps {
    page: number;
    pageSize: number;
    totalCount: number;
    handleUpdate: (page: number, pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, handleUpdate, pageSize, totalCount }) => {
    return (
        <BasePagination page={page}
                        onUpdate={handleUpdate}
                        pageSize={pageSize}
                        total={totalCount}
                        showInput={true}
                        pageSizeOptions={[10, 20, 40]}/>
    );
};

export default Pagination;
