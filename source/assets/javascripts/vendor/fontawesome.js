import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';

library.add(faTwitterSquare,
            faLinkedin,
            faFacebookSquare,
            faInstagramSquare,
            faGithubSquare);

dom.watch();
