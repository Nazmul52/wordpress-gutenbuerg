import block_icons from '../icon/index';
import './editor.scss';
import classnames from 'classnames';
// import React, { useEffect } from "react"
// import {glide} from './glide';

import Glide from "@glidejs/glide";

// const glideClass = document.querySelector(".glide");
// console.log('test');




const { registerBlockType }         =   wp.blocks;
const { Card, 
    CardBody, 
    CardHeader, 
    CheckboxControl,
    ColorPicker
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
     }
    },
    edit: ( props) => {
        const toggle_color_mode = () => {
            props.setAttributes({
                checked: !props.attributes.checked
            })
        };

  
      setTimeout(function(){
       new Glide(".glide", {
            // peek: 50,
            perView: 1,
            type: "carousel",
            autoplay: 4000
          }).mount();
       
      }, 2000);

     
      
       
        return (
          <div>
            <div class="glide">
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        Prev
                      </button>
                    </div>
                    <div class="glide__track" data-glide-el="track">
                      <ul class="glide__slides">
                        <li class="glide__slide">0</li>
                        <li class="glide__slide">1</li>
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
            <div>
             <div class="glide">
                    <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        Prev
                      </button>
                    </div>
                    <div class="glide__track" data-glide-el="track">
                      <ul class="glide__slides">
                        <li class="glide__slide">0</li>
                        <li class="glide__slide">1</li>
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