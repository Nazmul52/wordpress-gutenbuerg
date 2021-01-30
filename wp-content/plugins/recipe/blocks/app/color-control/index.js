import block_icons from '../icon/index';
import './editor.scss';
import classnames from 'classnames';
// import React, { useEffect } from "react"
// import {glide} from './glide';

import Glide from "@glidejs/glide";

// const glideClass = document.querySelector(".glide");
// console.log('test');



const { RichText, 
        InspectorControls,
        ColorPalette,
        MediaUpload,
        InnerBlocks,
        BlockControls,
        AlignmentToolbar
}                  =   wp.editor;

const { registerBlockType }         =   wp.blocks;
const { Card, 
    CardBody, 
    CardHeader, 
    CheckboxControl,
    ColorPicker,
    Text,
    PanelBody,
    IconButton,
    RangeControl
  }                    =   wp.components;
const { __ }                        =   wp.i18n;

const ALLOWED_BLOCKS = ['core/button'];
 


registerBlockType( 'udemy/color-control', {
    title:                              __( 'Card Example', 'recipe' ),
    description:                        __( 'Card Example Description', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {
     checked : {
         type:                  'boolean',
         default:                false,
         
     },
     color: {
         type:                  'object',
         default:               '#f00',
         selector:              '.checkbox-data',
     },

     title : {
       type:                    'string',
       source:                     'children',
       selector:                '.title'
       
     },
     description : {
      type:                    'array',
      source:                     'children',
      selector:                '.description'
      
    },

      title: {
        type:   'string',
        source: 'html',
        selector: 'h2'
      },
      titleColor: {
        type:  'string',
        default: 'black'
      
      },
      body : {
        type: 'string',
        source: 'html',
        selector: 'p'
      },
      alignment:{
        type: 'string',
        default: 'none'
      },
      bodyColor: {
        type:  'string',
        default: 'black'
      
      },
      backgroundImage: {
        type: 'string',
        default: null
      },
      overlayColor: {
        type: 'string',
        default: 'black'
      },
      overlayOpacity: {
        type: 'number',
        default: 0.3
      }
    },
    edit: ({attributes, setAttributes}) => {
     
      const {
        title,
        body,
        titleColor,
        bodyColor,
        backgroundImage,
        overlayColor,
        overlayOpacity,
        alignment
      } = attributes;

      function onChangeTitle(newTitle){
        setAttributes({ title: newTitle});
      }

      function onChangeBody(newBody){
        setAttributes({ body: newBody});
      }
      function onTitleColorChange(newColor){
        setAttributes ({ titleColor: newColor});
      }

      function onBodyColorChange(newColor){
        setAttributes ({ bodyColor: newColor});
      }

      function onSelectImage(newImage){
        setAttributes ({ backgroundImage: newImage.sizes.full.url});
      }

      function onOverlayColorChange(newColorValue){
        setAttributes ({ overlayColor: newColorValue});
      }

      function onOverlayOpacityChange(newOpacity){
        setAttributes ({ overlayOpacity: newOpacity});
      }

      function onChangeAlignment(newAlignment){
        setAttributes ({ alignment: newAlignment === undefined ? 'none' : newAlignment});
      }

        return ([
          <InspectorControls style={{ marginBottom: '40px'}}>
            <PanelBody title={ 'Font Color Settings ' }>
              <p><strong>Select a Title color:</strong></p>
              <ColorPalette value={titleColor}
                            onChange={ onTitleColorChange }
                            />
              <p><strong>Select a Body color:</strong></p>
              <ColorPalette value={bodyColor}
                            onChange={ onBodyColorChange }
            />
            </PanelBody>

            <PanelBody title={'background Image Settings'}>
                <p><strong>Select a Background Image:</strong></p>
                <MediaUpload 
                  onSelect={ onSelectImage }
                  type="image"
                  value={ backgroundImage }
                  render={ ( { open } ) => {
                  return   <IconButton 
                      onClick={ open }
                      icon="upload"
                      className="editor-media-placeholder__button is-buttton is-default is-large"
                    >
                       Background Image
                    </IconButton>
                  } }
                />

                <div style={ { marginTop: '40px', marginBottom: '40px' } }>
                   <p><strong>Overlay Color:</strong></p>
                   <ColorPalette 
                      value= { overlayColor }
                      onChange={ onOverlayColorChange }
                   />
                </div>
                <RangeControl 
                  label= { 'Overlay Opacity '}
                  value={overlayOpacity}
                  onChange={onOverlayOpacityChange}
                  min={ 0 }
                  max= { 1 }
                  step={ 0.05 }
                />

              
            </PanelBody>
            
          </InspectorControls>,
          <div className="cta-container" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-reapet' 
          }}>
            <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}>
          
            </div>
              <RichText key="editable" 
                        tagName="h2"
                        placeholder="Your CTA Title"
                        value={title}
                        onChange={ onChangeTitle }
                        style={ { color: titleColor } }
              />

            <RichText key="editable" 
                        tagName="p"
                        placeholder="Your CTA Body"
                        value={body}
                        onChange={ onChangeBody }
                        style = { { color: bodyColor, textAlign: alignment } }
              />
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS}/>
          </div>
          
        ]
          

     
        )
    },
    save: ({attributes, setAttributes}) => {
     
      const {
        title,
        body,
        titleColor,
        bodyColor,
        backgroundImage,
        overlayColor,
        overlayOpacity,
        alignment
      } = attributes;
      
        return (
          <div className="cta-container"  style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-reapet' 
          }}>
              <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}>

              </div>
            <h2 style={{color: titleColor}}>{title}</h2>
            <RichText.Content style={{ color: bodyColor, textAlign: alignment}} tagName="p" 
                              value={body}
            />
            <InnerBlocks.Content />
          </div>
        )
    }
});