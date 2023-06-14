import React from 'react'
import Image, {ImageProps} from 'next/image'
import { ContentfulImageFields } from '@/types'
import { Asset } from 'contentful'

type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>
    & { asset: Asset, width?: number, height?: number }

export default function ContentfulImage({ asset, width, height, ...rest }: Props) {

    const image = asset.fields as ContentfulImageFields

    return (
        <Image
            src={'https:' + asset.fields.file?.url ?? ''}
            alt={image.description ?? ''}
            width={width ?? image.file?.details.image.width}
            height={height ?? image.file?.details.image.height}
            {...rest}
        />
    )
}
