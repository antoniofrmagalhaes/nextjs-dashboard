import { Spinner } from '@chakra-ui/core'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import OutsideClickHandler from 'react-outside-click-handler'

import { Container, Content, CloseButton } from './styles'

const Search: React.FC = () => {
  const [query, setQuery] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
    }, 2500)
  }, [query])

  return (
    <OutsideClickHandler onOutsideClick={() => setQuery('')}>
      <Container>
        <RiSearchLine />
        <input
          type="text"
          placeholder="Searching for something?"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        {query && loading ? (
          <Spinner size="sm" />
        ) : (
          <CloseButton
            width="20px"
            height="20px"
            borderRadius="50%"
            onClick={() => setQuery('')}
          />
        )}
        {query && !loading && (
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio enim voluptatum modi. Adipisci magnam animi nesciunt
              sequi fuga dolor ea, quasi dignissimos culpa rem dolorum veniam
              dolore reiciendis, commodi quisquam! Nobis aliquam atque vel
              doloremque maiores, esse temporibus quae! Tenetur dolorum
              voluptatem quae temporibus obcaecati quas, doloremque non
              distinctio, quisquam est possimus eius voluptatum error explicabo,
              eligendi aperiam molestiae sapiente! Ducimus quidem sequi rerum
              minima fuga? Quos consectetur iure minima reprehenderit deserunt
              reiciendis expedita eveniet a consequatur! Placeat recusandae
              libero consequatur architecto eius, facere nostrum maiores
              corporis eligendi soluta consectetur.
            </p>
          </Content>
        )}
      </Container>
    </OutsideClickHandler>
  )
}

export default Search
