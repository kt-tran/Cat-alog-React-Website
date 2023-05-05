import { Badge } from "reactstrap";


export function BadgesDetail(props) {
    // console.log(props.cat)
    return (
        <div>
            {props.cat.hypoallergenic === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Hypoallergenic
                </Badge>
                :
                null
            }

            {props.cat.indoor === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Indoor Cat
                </Badge>
                :
                null
            }

            {props.cat.lap === 1 ?
                <Badge
                    color="success"
                    pill
                    style={{ backgroundColor: '#f80e0e' }}
                >
                    Lap Cat
                </Badge>
                :
                null
            }

            {props.cat.experimental === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Experimental Breed
                </Badge>
                :
                null
            }

            {props.cat.hairless === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Hairless
                </Badge>
                :
                null
            }

            {props.cat.natural === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Natural Breed
                </Badge>
                :
                null
            }

            {props.cat.rare === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Hypoallergenic
                </Badge>
                :
                null
            }

            {props.cat.rex === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Rex (curly haired)
                </Badge>
                :
                null
            }

            {props.cat.suppressed_tail === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Short/Stubby Tail
                </Badge>
                :
                null
            }

            {props.cat.short_legs === 1 ?
                <Badge
                    color="success"
                    pill
                >
                    Short Legs
                </Badge>
                :
                null
            }
        </div>
    )
}