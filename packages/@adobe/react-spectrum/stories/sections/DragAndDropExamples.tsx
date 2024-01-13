/* eslint-disable */
import React from 'react';
import {DropZone} from '@react-spectrum/dropzone'
import {Flex, Divider, IllustratedMessage, Heading} from '@adobe/react-spectrum';
import {Text} from 'react-aria-components';
import Upload from '@spectrum-icons/illustrations/Upload';
import {useDrag} from '@react-aria/dnd';

export default function DragAndDropExamples() {
  let [isFilled, setIsFilled] = React.useState(false);

  return (
    <>
      <h2>Drag and Drop</h2>
      <Flex direction="column" gap="size-125">
        <Divider />
        <Draggable />
        <DropZone
        maxWidth="size-3000"
        isFilled={isFilled}
        onDrop={() => setIsFilled(true)}>
        <IllustratedMessage>
          <Upload />
          <Heading>
            <Text slot="label">
              {isFilled ? 'You dropped something!' : 'Drag and drop your file'}
            </Text>
          </Heading>
        </IllustratedMessage>
      </DropZone>
      </Flex>
    </>
  )
}

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({ message: 'hello world' })
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me
    </div>
  );
}
