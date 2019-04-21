import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
    `
  ]
})
export class AppComponent {
  isCollapsed = false;
  currentLang = 'bash';
  content = {
    bash: [
      {
        requestmsg: `To authorize, use this code:`,
        request: `
        # With shell, you can just pass the correct header with each request
        curl "api_endpoint_here"
        -H "Authorization: meowmeowmeow"`,
        responsemsg: `Make sure to replace meowmeowmeow with your API key.`
      },
      {
        request: `curl "http://example.com/api/kittens"
        -H "Authorization: meowmeowmeow"`,
        responsemsg: `The above command returns JSON structured like this:`,
        response: `[
          {
            "id": 1,
            "name": "Fluffums",
            "breed": "calico",
            "fluffiness": 6,
            "cuteness": 7
          },
          {
            "id": 2,
            "name": "Max",
            "breed": "unknown",
            "fluffiness": 5,
            "cuteness": 10
          }
        ]`
      },
      {
        request: `
        curl "http://example.com/api/kittens/2"
        -H "Authorization: meowmeowmeow"`,
        responsemsg: `The above command returns JSON structured like this:`,
        response: `{
          "id": 2,
          "name": "Max",
          "breed": "unknown",
          "fluffiness": 5,
          "cuteness": 10
        }`
      },
      {
        request: `
        curl "http://example.com/api/kittens/2"
        -X DELETE
        -H "Authorization: meowmeowmeow"`,
        responsemsg: `
        The above command returns JSON structured like this:`,
        response: `
        
        {
          "id": 2,
          "deleted" : ":("
        }`
      }
    ],
    ruby: [
      {
        requestmsg: `To authorize, use this code:`,
        request: `
        require 'kittn'
        api = Kittn::APIClient.authorize!('meowmeowmeow')`,
        responsemsg: `Make sure to replace meowmeowmeow with your API key.`
      },
      {
        request: `
        require 'kittn'

        api = Kittn::APIClient.authorize!('meowmeowmeow')
        api.kittens.get`,
        responsemsg: `The above command returns JSON structured like this:`,
        response: `[
          {
            "id": 1,
            "name": "Fluffums",
            "breed": "calico",
            "fluffiness": 6,
            "cuteness": 7
          },
          {
            "id": 2,
            "name": "Max",
            "breed": "unknown",
            "fluffiness": 5,
            "cuteness": 10
          }
        ]`
      },
      {
        request: `
        require 'kittn'

        api = Kittn::APIClient.authorize!('meowmeowmeow')
        api.kittens.get(2)`,
        responsemsg: `The above command returns JSON structured like this:`,
        response: `{
          "id": 2,
          "name": "Max",
          "breed": "unknown",
          "fluffiness": 5,
          "cuteness": 10
        }`
      },
      {
        request: `
        require 'kittn'

        api = Kittn::APIClient.authorize!('meowmeowmeow')
        api.kittens.delete(2)`,
        responsemsg: `
        The above command returns JSON structured like this:`,
        response: `
        
        {
          "id": 2,
          "deleted" : ":("
        }`
      }
    ],
    
  };

  tabChanged(event) {
    console.log(event.index);
    if (event.index) {
      this.currentLang = 'ruby';
    } else this.currentLang = 'bash';
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}