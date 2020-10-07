//-------------------------------------------------------+
//  Sherdog MMA API
//  sherdog.getFighter(url, callback(data));
//-------------------------------------------------------+

var request = require('request')
var cheerio = require('cheerio')
const googleIt = require('google-it')

module.exports.getFighter = function (query, callback) {
  let sherdog_url
  const options = {
    'no-display': true,
    limit: 4,
  }
  googleIt({ options, query: `${query} sherdog` })
    .then((results) => {
      console.log(options)
      var resultContains = function (link, query) {
        if (link !== null) {
          if (link.indexOf(query) > -1) {
            return true
          }
        }
      }
      for (var i = 0; i < results.length; ++i) {
        if (resultContains(results[i].link, 'sherdog.com/fighter/')) {
          sherdog_url = results[i].link
          break
        }
      }
      request(sherdog_url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
          var $ = cheerio.load(html)

          //----------------------------------+
          //  JSON object for Fighter
          //----------------------------------+
          var fighter = {
            name: '',
            nickname: '',
            age: '',
            birthday: '',
            locality: '',
            nationality: '',
            association: '',
            height: '',
            weight: '',
            weight_class: '',
            image_url: '',
            wins: {
              total: 0,
              knockouts: 0,
              submissions: 0,
              decisions: 0,
              others: 0,
            },
            losses: {
              total: 0,
              knockouts: 0,
              submissions: 0,
              decisions: 0,
              others: 0,
            },
            no_contests: 0,
            fights: [],
          }

          // Fighter name, nickname
          $('.bio_fighter').filter(function () {
            let el = $(this)
            let name = el.find('span.fn').text()
            let nickname = el.find('span.nickname').text()
            fighter.name = name
            fighter.nickname = nickname.replace(/['"]+/g, '')
          })
          // Fighter image
          fighter.image_url = $('.profile_image.photo').attr('src')

          // Fighter bio
          $('.bio').filter(function () {
            var el = $(this)
            let age = el.find('.item.birthday strong').text()
            let birthday = el.find('span[itemprop="birthDate"]').text()
            let locality = el.find('span[itemprop="addressLocality"]').text()
            let nationality = el.find('strong[itemprop="nationality"]').text()
            let association = el
              .find('.item.association span[itemprop="name"]')
              .text()
            let height = el.find('.item.height strong').text()
            let weight = el.find('.item.weight strong').text()
            let weight_class = el.find('.item.wclass strong').text()
            fighter.age = age.slice(5)
            fighter.birthday = birthday
            fighter.locality = locality
            fighter.nationality = nationality
            fighter.association = association
            fighter.height = height
            fighter.weight = weight
            fighter.weight_class = weight_class
          })

          // Fighter record
          $('.record .count_history').filter(function () {
            let el = $(this)
            let wins = el.find('.left_side .bio_graph').first()
            let winsByKnockout = wins.find('.graph_tag:nth-child(3)')
            let winsBySubmission = wins.find('.graph_tag:nth-child(5)')
            let winsByDecision = wins.find('.graph_tag:nth-child(7)')
            let winsByOther = wins.find('.graph_tag:nth-child(9)')
            let losses = el.find('.left_side .bio_graph.loser')
            let lossesByKnockout = losses.find('.graph_tag:nth-child(3)')
            let lossesBySubmission = losses.find('.graph_tag:nth-child(5)')
            let lossesByDecision = losses.find('.graph_tag:nth-child(7)')
            let lossesByOther = losses.find('.graph_tag:nth-child(9)')
            let noContests = el.find('.right_side .bio_graph')
            let getTotal = function (el) {
              return parseInt(el.text().split(' ')[0] || 0)
            }
            let getPercent = function (el) {
              return el.find('em').text().split('%')[0]
            }

            let wins_total = parseInt(wins.find('.card .counter').text())
            let losses_total = parseInt(losses.find('.counter').text())
            let no_contests_total = parseInt(noContests.find('.counter').text())
            fighter.wins.total = wins_total
            fighter.losses.total = losses_total
            fighter.no_contests = no_contests_total
            fighter.wins.knockouts = getTotal(winsByKnockout)
            fighter.wins.submissions = getTotal(winsBySubmission)
            fighter.wins.decisions = getTotal(winsByDecision)
            fighter.wins.others = getTotal(winsByOther)
            fighter.losses.knockouts = getTotal(lossesByKnockout)
            fighter.losses.submissions = getTotal(lossesBySubmission)
            fighter.losses.decisions = getTotal(lossesByDecision)
          })

          // Fighter Fight History
          $('.module.fight_history tr:not(.table_head)').each(function () {
            let el = $(this)
            let result = el.find('td:nth-child(1) .final_result').text()
            let opponent_name = el.find('td:nth-child(2) a').text()
            let event_name = el.find('td:nth-child(3) a').text()
            let event_url = el.find('td:nth-child(3) a').attr('href')
            let event_date = el.find('td:nth-child(3) .sub_line').text()
            let method =
              el
                .find('td:nth-child(4)')
                .text()
                .split(/\)(.*)/)[0] + ')'
            let referee = el.find('td:nth-child(4) .sub_line').text()
            let round = el.find('td:nth-child(5)').text()
            let time = el.find('td:nth-child(6)').text()
            //----------------------------------+
            //  JSON object for Fight
            //----------------------------------+
            let fight = {
              name: event_name,
              date: event_date,
              url: event_url,
              result: result,
              method: method,
              referee: referee,
              round: round,
              time: time,
              opponent: opponent_name,
            }

            if (result !== '') {
              fighter.fights.push(fight)
            }
          })

          callback(fighter)
        }
      })
    })
    .catch((e) => {
      console.error(e)
    })
}
