import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/de'
dayjs.locale('de')

export default function BlogPreview({ blogEntries }) {
  if (blogEntries.length === 0) {
    return <></>
  }

  return (
    <>
      <h2>Neues aus unserem Blog</h2>
      <BlogPreviewGrid>
        {blogEntries
          .sort(
            (a, b) =>
              dayjs(b.attributes.Erstellungszeitunkt).unix() -
              dayjs(a.attributes.Erstellungszeitunkt).unix()
          )
          .slice(0, 2)
          .map((blogEntry) => {
            return (
              <BlogPreviewItem key={blogEntry.attributes.slug}>
                <div>
                  <Image
                    height="200"
                    width="352"
                    src={`http://localhost:1337${blogEntry.attributes.Media.data.attributes.formats.medium.url}`}
                    alt=""
                  />

                  <p>
                    {dayjs(blogEntry.attributes.Erstellungszeitunkt).format(
                      'DD/MM/YYYY'
                    )}
                  </p>
                  <h3>{blogEntry.attributes.Title}</h3>
                  <ReactMarkdown>{blogEntry.attributes.Preview}</ReactMarkdown>
                  <Link href={`blog/${blogEntry.attributes.slug}`}>
                    Mehr lesen...
                  </Link>
                </div>
              </BlogPreviewItem>
            )
          })}
      </BlogPreviewGrid>
    </>
  )
}

const BlogPreviewGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 810px) {
    grid-template-columns: 1fr;
  }
`

const BlogPreviewItem = styled.li`
  width: 70%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 810px) {
    width: 90%;
    max-width: 350px;
  }
`
