import block_icons from '../icon/index';
import './editor.scss';
import classnames from 'classnames';
// import React, { useEffect } from "react"
// import {glide} from './glide';

import Glide from "@glidejs/glide";

// const glideClass = document.querySelector(".glide");
// console.log('test');



const { RichText }                  =   wp.editor;

const { registerBlockType }         =   wp.blocks;
const { Card, 
    CardBody, 
    CardHeader, 
    CheckboxControl,
    ColorPicker,
    Text
  }                    =   wp.components;
const { __ }                        =   wp.i18n;

  
 


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
      
    }
    },
    edit: ( props) => {
        const toggle_color_mode = () => {
            props.setAttributes({
                checked: !props.attributes.checked
            })
        };

       const  mountButton = () => {
      
        var glide=  new Glide(".glide", {
          // peek: 50,
          perView: 1,
          type: "carousel",
  
        }, {startAt: 0});

          glide.mount()
     
      glide.update({ startAt: 1})


         
        }

        const pauseButton = () => {
          glide.pause();
        
        }
          

      // setTimeout(function(){
     
       
      // }, 2000);

 
      
       
        return (
          <div className={props.className}>
            <div class="glide">
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        Prev
                      </button>
                    </div>
                    <div class="glide__track" data-glide-el="track">
                      <ul class="glide__slides">
                        <li class="glide__slide" >
                        
                          <RichText
                            placeholder={ __('Add your title here.', 'recipe')}
                            onChange={ (new_val) => {
                              props.setAttributes({ title: new_val});
                            }}

                            value={ props.attributes.title}

                          />

                          
                          <RichText 
                          
                          tagName="div"
                          multilie="p"
                           placeholder={ __('Add your description here.', 'recipe')}
                           onChange={ (new_val) => {
                            props.setAttributes({ description: new_val});
                          }}

                          value={ props.attributes.description}
                          />

                          
                        </li>
                        <li class="glide__slide">
                        <RichText
                            placeholder={ __('Add your title here.', 'recipe')}
                            onChange={ (new_val) => {
                              props.setAttributes({ title: new_val});
                            }}

                            value={ props.attributes.title}

                          />

                          
                          <RichText 
                          
                          tagName="div"
                          multilie="p"
                           placeholder={ __('Add your description here.', 'recipe')}
                           onChange={ (new_val) => {
                            props.setAttributes({ description: new_val});
                          }}

                          value={ props.attributes.description}
                          />
                        </li>
                        <li class="glide__slide">2</li>
                      </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        Next
                      </button>
                    </div>
                  </div>
                  <button class="btn btn-info" onClick={mountButton} >Mount</button>

                  <button class="btn btn-info" onClick={pauseButton} >Pause</button>
          </div>
       
            // <div className={props.className}>
            //   <Card>
            //       <CardHeader>Design Card Example</CardHeader>
            //       <CardBody>
            //       <CheckboxControl
            //             heading="User"
            //             label="Is author"
            //             help="Is the user a author or not?"
            //             checked={props.attributes.checked}
            //             onChange={toggle_color_mode}
            //         />
            //         <ColorPicker
            //             color={ props.attributes.color }
            //             onChangeComplete={ ( value ) => {
            //                 props.setAttributes({ color : value});
            //             }}
            //             disableAlpha
            //         />






            //       </CardBody>
            //   </Card>

            //    <div className="checkbox-data">
            //         This is an example of a block with night mode.
            //         { props.attributes.color.hex}
            //     </div>

                
                
            // </div>
        )
    },
    save: ( props ) => {
        return (
            <div className={props.className}>
             <div class="glide">
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        Prev
                      </button>
                    </div>
                    <div class="glide__track" data-glide-el="track">
                      <ul class="glide__slides">
                        <li class="glide__slide">
                          <div className="title">
                            {props.attributes.title}
                          </div>
                          <div className="description">
                            {props.attributes.description}
                          </div>
                          
                        
                        </li>
                        <li class="glide__slide">
                        <div className="title">
                            {props.attributes.title}
                          </div>
                          <div className="description">
                            {props.attributes.description}
                          </div>
                          
                        </li>
                        <li class="glide__slide">2</li>
                      </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        Next
                      </button>
                    </div>
                  </div>   
            </div>
        )
    }
});