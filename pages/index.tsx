import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NeovryBuilder v3.0 Alpha</title>
      </Head>
      <div style={{
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1>NeovryBuilder v3.0 Alpha</h1>
        <p>✅ Sistema activado correctamente desde móvil.</p>
      </div>
    </>
  );
}
