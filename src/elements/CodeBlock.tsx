import Highlight, { defaultProps } from 'prism-react-renderer'
import { styled } from 'twin.macro'
import Clipboard from 'react-clipboard.js'
import { HiOutlineClipboardCheck, HiOutlineClipboard } from 'react-icons/hi'
import { useState } from 'react'

function CodeBlock({
  children = '',
  highlight = '',
  style = {},
  className: containerClass,
}) {
  const [isCopied, setIsCopied] = useState(false)

  const onSuccess = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const lineNumbers = getLineNumbers(highlight)
  return (
    <>
      <Highlight
        {...defaultProps}
        code={getCode(children).trim()}
        language="jsx"
      >
        {({ className, tokens, getTokenProps }) => {
          return (
            <ContainerBlock>
              <Clipboard
                tw="self-end"
                data-clipboard-text={getCode(children).trim()}
                onSuccess={onSuccess}
              >
                {isCopied ? (
                  <HiOutlineClipboardCheck color="#77AB59" />
                ) : (
                  <HiOutlineClipboard color="#ddd" />
                )}
              </Clipboard>
              <StyledBlock
                className={`${className} ${containerClass}`}
                tw="rounded-md overflow-x-auto text-sm"
                style={style}
              >
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    style={{
                      '--bg-opacity': lineNumbers.includes(i) ? 0.1 : 0,
                    }}
                  >
                    {line.map((token, key) => {
                      const { children, className } = getTokenProps({
                        token,
                        key,
                      })
                      const [, tokenType] = className.split(' ')
                      return (
                        <span
                          key={key}
                          style={{
                            color: `var(--token-color-${tokenType})`,
                            fontStyle: `var(--token-style-${tokenType})`,
                          }}
                        >
                          {children}
                        </span>
                      )
                    })}
                  </Line>
                ))}
              </StyledBlock>
            </ContainerBlock>
          )
        }}
      </Highlight>
    </>
  )
}

export default styled(CodeBlock)``

function getCode(children) {
  if (typeof children === 'string') {
    return children
  }

  if (children.props?.mdxType === 'code') {
    return children.props.children
  }

  return ''
}

function getLineNumbers(highlight) {
  const numbers = highlight.split(',').map(Number)
  return {
    /**
     * @param {number} lineNumber
     * @returns {boolean} whether the given line number should be highlighted
     */
    includes(lineNumber) {
      if (!highlight.length) {
        return false
      }
      return numbers.includes(lineNumber)
    },
  }
}

const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgb(44, 38, 63);
  background: linear-gradient(
    157deg,
    rgba(44, 38, 63, 1) 0%,
    rgba(58, 48, 62, 0.9992560257294952) 100%
  );
`

const StyledBlock = styled.pre`
  background: rgb(44, 38, 63);
  background: linear-gradient(
    157deg,
    rgba(44, 38, 63, 1) 0%,
    rgba(58, 48, 62, 0.9992560257294952) 100%
  );
  color: white;
  padding: var(--space, 24px);
  font-family: 'JetBrains Mono', monospace;
`

const Line = styled.div`
  background: hsla(0, 0%, 100%, var(--bg-opacity, 0));
`
