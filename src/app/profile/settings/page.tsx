import Sidebar from '@/components/profile/Sidebar';
import Container from '@/utils/Container';
import React from 'react';

const SettingsPage = () => {
    return (
       <Container>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-3">
          <h1> kkkkkkkkkkk nnnnnnnnnn</h1>
        </div>
      </div>
    </Container>
    );
};

export default SettingsPage;