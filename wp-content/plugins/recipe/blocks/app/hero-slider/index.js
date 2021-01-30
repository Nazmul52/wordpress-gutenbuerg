import block_icons from '../icon/index';
import './editor.scss';

const { registerBlockType }         =   wp.blocks;

const {
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload,
    InnerBlocks,
    MediaUploadCheck,
    BlockControls,
    AlignmentToolbar
}    =  wp.editor;

const {
    PanelBody,
    IconButton,
    RangeControl,
    Button, 
    Dashicon
  }                    =   wp.components;

const { __ }                        =   wp.i18n;
const ALLOWED_BLOCKS = ['core/button'];

registerBlockType( 'udemy/hero-slider', { 

    title:                              __( 'Hero Slider', 'recipe' ),
    description:                        __( 'Hero Slider Description', 'recipe' ),
    category:                           'common',
    icon:                               block_icons.wapuu,

    attributes:{
            title : {
                type:   'string',
                source: 'html',
                selector: 'h2'
            },
            titleColor: {
                type:  'string',
                default: 'black'
              
              },
            body: {
                type:   'string',
                source: 'html',
                selector: 'p'
            },
            bodyColor: {
                type:  'string',
                default: 'black'
              
              },
            backgroundColor: {
                type: 'string',
                default: 'white'
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
              },
            img_id: {
                type:                   'number'
            },
            img_url:{
                type:                   'string',
                source:                 'attribute',
                attribut:               'src',
                selector:               'img'
            },
            img_alt:{
                type:                   'string',
                source:                 'attribute',
                attribut:               'src',
                selector:               'img'
            },
            alignment:{
                type: 'string',
                default: 'none'
            },
    },

    edit : (props) => {
        const  {
            title,
            body,
            titleColor,
            bodyColor,
            backgroundImage,
            overlayColor,
            overlayOpacity,
            backgroundColor,
            alignment
        } = props.attributes;


        function onChangeTitle (newTitle){
            props.setAttributes({title: newTitle})
        }

        function onChangeBody (newBody){
            props.setAttributes({body: newBody});
        }

        function onBackgroundColor (newBackgroundColor){
            props.setAttributes({backgroundColor: newBackgroundColor});
        }
        
        function onSelectImage(newImage){
            props.setAttributes ({ backgroundImage: newImage.sizes.full.url});
        }

        function onOverlayColorChange(newColorValue){
            props.setAttributes ({ overlayColor: newColorValue});
        }

        function onOverlayOpacityChange(newOpacity){
            props.setAttributes ({ overlayOpacity: newOpacity});
        }

        function onChangeAlignment(newAlignment){
            props.setAttributes ({ alignment: newAlignment === undefined ? 'none' : newAlignment});
        }
    
      const select_img   =  (img) => {
        props.setAttributes({
            img_ID:         img.id,
            img_URL:        img.url,
            img_alt:        img.alt
        })
    };
    const remove_img    = () => {
        props.setAttributes({
            img_ID:         null,
            img_URL:        null,
            img_alt:        null
        })
    };
        return ([
            <InspectorControls style={{ marginBottom: '40px'}}>
            <PanelBody title={'background Color Settings'}>
                <p><strong>Select a Background Color:</strong></p>
                <ColorPalette 
                    value={backgroundColor}
                    onChange={onBackgroundColor}
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
        <div className="cta-container"
        style={{
            // backgroundImage: `url(${backgroundImage})`,
            backgroundColor: backgroundColor,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-reapet' 
          }}>
              {
                  <BlockControls>
                      <AlignmentToolbar 
                        value={alignment}
                        onChange={onChangeAlignment}
                      />
                  </BlockControls>
              }
            {/* <div className="slider-content"> */}
                <RichText 
                        
                        key="editable" 
                        tagName="h2"
                        placeholder="Your Slider Title"
                        value={title}
                        onChange={ onChangeTitle }
                        style={ { color: titleColor, textAlign: alignment } }
                />

                <RichText 
                        key="editable" 
                        tagName="p"
                        placeholder="Your Slider Description"
                        value={body}
                        onChange={ onChangeBody }
                        style={ { color: bodyColor, textAlign: alignment } }
                />
                  {props.attributes.img_ID ? ( 
                <div className="image-ctr">
                    <img src={ props.attributes.img_URL}
                         style={{textAlign: alignment}}
                        alt={props.attributes.img_alt} />
                        {props.isSelected ? (
                            <Button className="btn-remove" onClick={remove_img}>
                                <Dashicon icon='no' size='20'/>
                            </Button>
                        ): null}
                </div>
                ): (
                    <MediaUploadCheck>
                        <MediaUpload
                            allowedType={[ 'image' ]}
                            value={props.attributes.img_ID}
                            onSelect={ select_img }
                            render={ ({open}) => (
                                <Button className={"button button-large"} onClick={open}>
                                    { __( 'Upload Image', 'recipe') }
                                </Button>
                            )}
                        ></MediaUpload>
                    </MediaUploadCheck>
                )}      
                <InnerBlocks  allowedBlocks={ALLOWED_BLOCKS}/>    
            {/* </div> */}
            {/* <div className="slider-img"></div> */}
        </div>
        ]
           
        )
    },

    save: (props) => {
        const { 
            title,
            titleColor,
            body,
            bodyColor,
            backgroundColor,
            backgroundImage,
            overlayColor,
            overlayOpacity,
            img_URL,
            img_alt,
            alignment
        } = props.attributes;
        return (
            <div className="cta-container"
            style={{
                // backgroundImage: `url(${backgroundImage})`,
                backgroundColor: backgroundColor,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-reapet' 
              }}>
                   <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}>

                    </div>
                    <h2 style={{color: titleColor, textAlign: alignment}}>{ title }</h2>
                    <RichText.Content tagName="p" style={{color: bodyColor, textAlign: alignment}} value={body} />
                    <img src={ img_URL } style={{textAlign: alignment}}
                        alt={ img_alt } />
                       <InnerBlocks.Content />  
            </div>
        )
    }
})