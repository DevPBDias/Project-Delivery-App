import React from 'react';
import Header from '../components/Header';
import ButtonDetails from '../components/ButtonDetails';
import TableDetails from '../components/TableDetails';

function SellerDetails() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <main>
        <ButtonDetails />
        <TableDetails />
      </main>
      <p>renderiza!</p>
    </section>

  );
}

export default SellerDetails;
