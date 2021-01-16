import block_icons from '../icon/index';
// import './editor.scss';
import classnames from 'classnames';


const { registerBlockType }         =   wp.blocks;
const { Card, CardBody, CardHeader, CheckboxControl }                    =   wp.components;
const { __ }                        =   wp.i18n;
const { useState }                      = wp.element;

registerBlockType( 'udemy/color-control', {
    title:                              __( 'Card Example', 'recipe' ),
    description:                        __( 'Card Example Description', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,
    attributes: {
     checked : {
         type:                  'boolean',
         default:                false,
         selector:              '.checkbox-data',
     }
    },
    edit: ( props ) => {
        const toggle_color_mode = () => {
            props.setAttributes({
                checked: !props.attributes.checked
            })
        };
        return (
            <div className={props.className}>
              <Card>
                  <CardHeader>Design Card Example</CardHeader>
                  <CardBody>
                  <CheckboxControl
                        heading="User"
                        label="Is author"
                        help="Is the user a author or not?"
                        checked={props.attributes.checked}
                        onChange={toggle_color_mode}
                    />

                  </CardBody>
              </Card>

              <div className="checkbox-data">
                    This is an example of a block with night mode.
                    { props.attributes.checked.toString()}
                </div>
            </div>
        )
    },
    save: ( props ) => {
        return (
            <div>
                
            </div>
        )
    }
});