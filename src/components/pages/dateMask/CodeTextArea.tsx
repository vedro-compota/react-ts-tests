import React, { useRef } from "react"


export type CodeTextAreaPropTypes = any;

export const CodeTextArea = ({ onChange, value, error }: CodeTextAreaPropTypes) => {
  const textArea: any = useRef<HTMLInputElement>()
  return (
      <textarea
        ref={textArea}
        onKeyDown={(e: any) => {
          if (e.key === "Tab") {
            e.preventDefault()

            const { selectionStart, selectionEnd } = e.target

            const newValue =
              value.substring(0, selectionStart) +
              "  " +
              value.substring(selectionEnd)

            onChange(newValue)
            if (textArea.current) {
              textArea.current.value = newValue
              textArea.current.selectionStart = textArea.current.selectionEnd =
                selectionStart + 2
            }
          }
        }}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
  )
}