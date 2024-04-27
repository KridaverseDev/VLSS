// PDFDocument.js


import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid black', // Border style
    borderRadius: 10, // Corner radius
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 12,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Image src="/path/to/logo.png" style={styles.logo} />
        <Text style={styles.title}>Membership Application Form</Text>
        <Text style={styles.address}>Your Address Goes Here</Text>
      </View>

      {/* Body: Questions and Answers */}
      <View>
        <Text style={styles.question}>Question 1: What is your name?</Text>
        <Text>Your answer goes here</Text>
        <Text style={styles.question}>Question 2: What is your email address?</Text>
        <Text>Your answer goes here</Text>
        {/* Add more questions and answers as needed */}
      </View>

      {/* Footer */}
      <Text style={{ position: 'absolute', bottom: 30 }}>Footer Text</Text>
    </Page>
  </Document>
);

export default PDFDocument;