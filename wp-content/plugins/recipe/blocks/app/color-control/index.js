import block_icons from '../icon/index';
// import './editor.scss';
import classnames from 'classnames';


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
     
        console.log(  props.attributes.color.hex );
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
                    <ColorPicker
                        color={ props.attributes.color }
                        onChangeComplete={ ( value ) => {
                            props.setAttributes({ color : value});
                        }}
                        disableAlpha
                    />
                  </CardBody>
              </Card>

              <div className="checkbox-data">
                    This is an example of a block with night mode.
                    { props.attributes.color.hex}
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