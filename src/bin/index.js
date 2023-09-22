#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import db from '../db.js';

// COMPANIES_PATH is useful when you want to get the path to a specific company file
const COMPANIES_PATH = path.join(process.cwd(), './companies');

// companiesFilePaths is the list of all mdx files inside the COMPANIES_PATH directory
const companiesFilePaths = fs
  .readdirSync(COMPANIES_PATH)
  // Only include md(x) files
  .filter((file_path) => /\.md?$/.test(file_path));

const buildDataSource = () => {
  companiesFilePaths?.map((companyPath) => {
    const companyFilePath = path.join(COMPANIES_PATH, companyPath);
    const source = fs.readFileSync(companyFilePath);
    const { content, data } = matter(source);
    db.insert({
      ...JSON.parse(JSON.stringify(data)),
      content,
    });
  });
};

buildDataSource();
